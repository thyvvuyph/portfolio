# Moon Video - Profile Animation Setup Notes

## Summary
Added a moon animation video as a profile element on the homepage hero section (dark theme only). The video plays forward then reverses, creating an infinite ping-pong loop.

---

## Source File
- **Original**: `~/Downloads/BG1.mp4`
- **Format**: QuickTime Animation (qtrle), ARGB pixel format (has transparency)
- **Resolution**: 720x720, 60fps, ~59 seconds
- **Size**: 3.4 GB (uncompressed)

---

## Key Challenges & Solutions

### 1. File Too Large for GitHub (>100MB)
- GitHub Pages rejects files over 100MB
- **Solution**: Compressed heavily (reduced resolution, fps, bitrate)

### 2. Transparency Not Working
- The video has an ARGB alpha channel (transparent background)
- H.264/MP4 does NOT support alpha — transparent areas become dark grey
- VP9/WebM supports alpha but `libvpx-vp9` on this machine didn't encode alpha correctly (known issue)
- HEVC with alpha via `hevc_videotoolbox` also failed — didn't produce alpha track
- **Solution**: Composited video over pure black background + use CSS `mix-blend-mode: lighten`

### 3. mix-blend-mode choices
- `screen` — makes black invisible BUT brightens/whitens dark content (shadows turn white)
- `lighten` — shows whichever pixel is brighter (page bg vs video). Hides pure black without altering shadows ✅
- `multiply` — would be needed for light backgrounds (hides white)

### 4. Video Playing Slowly (Performance)
- First attempt: Canvas pixel manipulation (reading every pixel per frame to remove black) — too CPU heavy, caused lag
- **Solution**: Use native CSS blend modes (GPU-accelerated, zero performance cost)

### 5. Slow Start/Loading
- Original compressed files were 95MB (WebM) + 29MB (MP4)
- **Solution**: Reduced to 320x320, 24fps, lower bitrate → 5.4MB WebM + 2.6MB MP4

---

## Final FFmpeg Commands

### Create MP4 (pure black background, forward+reverse):
```bash
ffmpeg -i ~/Downloads/BG1.mp4 \
  -filter_complex "color=black:720x720[bg];[bg][0:v]overlay=shortest=1,scale=320:320,fps=24,split[fwd][tmp];[tmp]reverse[rev];[fwd][rev]concat=n=2:v=1:a=0[out]" \
  -map "[out]" -c:v libx264 -preset slow -crf 23 -an -movflags +faststart \
  -y public/BG.mp4
```
**Result**: 2.6 MB

### Create WebM (pure black background, forward+reverse):
```bash
ffmpeg -i ~/Downloads/BG1.mp4 \
  -filter_complex "color=black:720x720[bg];[bg][0:v]overlay=shortest=1,scale=320:320,fps=24,split[fwd][tmp];[tmp]reverse[rev];[fwd][rev]concat=n=2:v=1:a=0[out]" \
  -map "[out]" -c:v libvpx-vp9 -b:v 400k -an \
  -y public/BG.webm
```
**Result**: 5.4 MB

### What the filter does:
1. `color=black:720x720` — creates a black background
2. `overlay=shortest=1` — composites the original (with alpha) over black
3. `scale=320:320,fps=24` — downscale and reduce framerate
4. `split[fwd][tmp]` — duplicate the stream
5. `[tmp]reverse[rev]` — reverse one copy
6. `concat=n=2` — join forward + reverse into one seamless loop

---

## HTML Implementation

```html
<!-- In hero section grid -->
<div class="lg:col-span-5 flex justify-center lg:justify-end profile-video-wrapper">
  <div class="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative">
    <video id="profile-video" class="w-full h-full object-contain"
           style="mix-blend-mode: lighten;"
           muted autoplay loop playsinline preload="auto">
      <source src="/BG.webm" type="video/webm"/>
      <source src="/BG.mp4" type="video/mp4"/>
    </video>
  </div>
</div>
```

### CSS (hide in light theme):
```css
html.light .profile-video-wrapper { display: none; }
```

### JavaScript (pause in light, play in dark):
```javascript
(function() {
  const video = document.getElementById('profile-video');
  if (!video) return;
  function update() {
    if (document.documentElement.classList.contains('light')) {
      video.pause();
    } else {
      video.play();
    }
  }
  video.addEventListener('loadeddata', update);
  const observer = new MutationObserver(function(m) {
    m.forEach(function(mut) { if (mut.attributeName === 'class') update(); });
  });
  observer.observe(document.documentElement, { attributes: true });
  if (video.readyState >= 2) update();
})();
```

---

## Why This Approach Works

| Browser | Format Used | Transparency Method |
|---------|------------|-------------------|
| Chrome  | WebM (VP9) | `mix-blend-mode: lighten` hides black bg |
| Safari  | MP4 (H.264) | `mix-blend-mode: lighten` hides black bg |
| Firefox | WebM (VP9) | `mix-blend-mode: lighten` hides black bg |

The `lighten` blend mode compares each pixel of the video with the underlying page background and shows whichever is brighter. Since the video background is pure black (#000000) and the page background is dark navy (#020617), the page color "wins" in background areas, effectively making the video background invisible while keeping the moon content intact with proper shadows.

---

## File Locations
- Source: `~/Downloads/BG1.mp4`
- WebM: `public/BG.webm` (5.4 MB)
- MP4: `public/BG.mp4` (2.6 MB)
- Dark theme background: `public/bg.png`
- Light theme background: `public/bg-light.png`
