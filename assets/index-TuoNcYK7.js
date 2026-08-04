(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const c={en:{nav:{home:"HOME",about:"ABOUT",works:"WORKS",gallery:"GALLERY",contact:"CONTACT"},hero:{title:"Haley Pham",intro:"Hi, I'm Haley Pham. I graduated Bachelor of Communication Design at RMIT University. My aspiration is to live creatively and build up my experience as a graphic designer. I would love to use and practice my skills in developing and creating graphics and illustrations for websites.",cta:"Contact Me"},about:{title:"ABOUT ME",text:"Hi I'm Haley Pham, a Communication Designer graduated from RMIT University Melbourne. I'm passionate about graphic design, web design, and creating visual content. Where I lack experience, I make up for in my eagerness to learn and adapt.",doing:"WHAT I'M DOING",skills:["MARKETING","BRANDING","WEBSITE","MEDIA"]},works:{title:"SELECTED PROJECT",project:"PROJECT",type:"TYPE",projects:[{title:"Website Design",company:"Being Bees Honey",type:"Mobile Apps • UI/UX Design"},{title:"Event Key Visual",company:"Graduation 2026",type:"Branding Project • Digital Marketing"},{title:"Campaign Visual",company:"MISS",type:"UI/UX Design • Web Design"},{title:"Social Media",company:"The Al Fresco's Group",type:"Branding Project • Web Design • Mobile Apps"},{title:"Social Media",company:"LarbThai",type:""},{title:"Branding",company:"Texas Topline Motors",type:""},{title:"Logo",company:"",type:""},{title:"Packaging",company:"Bunny Cocktail",type:""}]},gallery:{title:"GALLERY",text:"Portfolio images coming soon. Please visit",link:"www.haleydesign.com.au",linkText:"to view my work."},contact:{title:"Have a Cool Project?",cta:"Contact Me"},footer:{name:"Haley Pham",role:"Creative Graphic Designer",nav:"Navigation",navLinks:["Home","About","Work","Gallery"],services:"Services",servicesList:["Marketing","Branding","Logo","Website","Media"],contactTitle:"Contact"}},vi:{nav:{home:"TRANG CHỦ",about:"GIỚI THIỆU",works:"DỰ ÁN",gallery:"THƯ VIỆN",contact:"LIÊN HỆ"},hero:{title:"Vy Pham",intro:"Xin chào, tôi là Haley Pham. Tôi tốt nghiệp Cử nhân Thiết kế Truyền thông tại Đại học RMIT. Khát vọng của tôi là sống sáng tạo và tích lũy kinh nghiệm với tư cách là một nhà thiết kế đồ họa. Tôi muốn sử dụng và thực hành kỹ năng của mình trong việc phát triển và tạo đồ họa cũng như hình minh họa cho các trang web.",cta:"Liên Hệ"},about:{title:"VỀ TÔI",text:"Xin chào, tôi là Haley Pham, một Nhà thiết kế Truyền thông tốt nghiệp từ Đại học RMIT Melbourne. Tôi đam mê thiết kế đồ họa, thiết kế web và tạo nội dung hình ảnh. Những gì tôi thiếu kinh nghiệm, tôi bù đắp bằng sự háo hức học hỏi và thích nghi.",doing:"CÔNG VIỆC CỦA TÔI",skills:["MARKETING","BRANDING","WEBSITE","MEDIA"]},works:{title:"DỰ ÁN NỔI BẬT",project:"DỰ ÁN",type:"LOẠI",projects:[{title:"Website Design",company:"Being Bees Honey",type:"Ứng dụng Di động • Thiết kế UI/UX"},{title:"Event Key Visual",company:"Graduation 2026",type:"Dự án Thương hiệu • Marketing Số"},{title:"Campaign Visual",company:"MISS",type:"Thiết kế UI/UX • Thiết kế Web"},{title:"Social Media",company:"The Al Fresco's Group",type:"Dự án Thương hiệu • Thiết kế Web • Ứng dụng Di động"},{title:"Social Media",company:"LarbThai",type:""},{title:"Branding",company:"Texas Topline Motors",type:""},{title:"Logo",company:"",type:""},{title:"Packaging",company:"Bunny Cocktail",type:""}]},gallery:{title:"THƯ VIỆN",text:"Hình ảnh portfolio sắp ra mắt. Vui lòng truy cập",link:"www.haleydesign.com.au",linkText:"để xem tác phẩm của tôi."},contact:{title:"Có Dự Án Thú Vị?",cta:"Liên Hệ"},footer:{name:"Haley Pham",role:"Nhà Thiết Kế Đồ Họa Sáng Tạo",nav:"Điều hướng",navLinks:["Trang chủ","Giới thiệu","Dự án","Thư viện"],services:"Dịch vụ",servicesList:["Marketing","Branding","Logo","Website","Media"],contactTitle:"Liên hệ"}}};let s="en";function d(){const e=c[s];document.querySelector("#app").innerHTML=`
  <nav class="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 border-b border-violet-800" style="background: #1e1b4b;">
    <div class="flex-1"></div>
    <div class="flex gap-12">
      <a href="#home" class="text-sm font-medium transition" style="color: #a78bfa;" onmouseover="this.style.color='#eab308'" onmouseout="this.style.color='#a78bfa'">${e.nav.home}</a>
      <a href="#works" class="text-sm font-medium transition" style="color: #a78bfa;" onmouseover="this.style.color='#eab308'" onmouseout="this.style.color='#a78bfa'">${e.nav.works}</a>
      <a href="#gallery" class="text-sm font-medium transition" style="color: #a78bfa;" onmouseover="this.style.color='#eab308'" onmouseout="this.style.color='#a78bfa'">${e.nav.gallery}</a>
      <a href="#contact" class="text-sm font-medium transition" style="color: #a78bfa;" onmouseover="this.style.color='#eab308'" onmouseout="this.style.color='#a78bfa'">${e.nav.contact}</a>
    </div>
    <div class="flex-1 flex justify-end">
      <button onclick="toggleLang()" class="text-sm font-medium px-3 py-1 rounded-full border border-violet-400 text-violet-700 hover:bg-violet-700 hover:text-white transition">${s==="en"?"VI":"EN"}</button>
    </div>
  </nav>

  <section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32" style="background: linear-gradient(135deg, #fdf4ff 0%, #ede9fe 50%, #fef9c3 100%);">
    <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight" style="background: linear-gradient(90deg, #7c3aed, #ec4899, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${e.hero.title}</h1>
    <p class="max-w-2xl text-lg text-gray-600 mb-4">${e.hero.intro}</p>

    <h3 class="text-xs tracking-widest text-violet-400 mt-4 mb-8">${e.about.doing}</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mb-12">
      ${e.about.skills.map(t=>`<div class="p-6 border border-violet-200 rounded-lg bg-white/60 hover:bg-white transition flex items-center justify-center shadow-sm"><h4 class="text-sm font-semibold text-violet-700 text-center">${t}</h4></div>`).join("")}
    </div>
    <a href="#contact" class="px-10 py-4 rounded-full font-semibold hover:scale-105 transition text-white mb-16" style="background: #ec4899;">${e.hero.cta}</a>
  </section>



  <section id="works" class="py-12 px-8 max-w-6xl mx-auto text-white rounded-3xl my-4" style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);">
    <h2 class="text-xs tracking-widest text-white/70 mb-8">${e.works.title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${e.works.projects.map((t,n)=>`
        <div class="p-8 border-2 border-white/30 rounded-2xl bg-white/10 hover:bg-white/20 transition flex flex-col gap-4">
          <span class="text-white/50 text-xs">0${n+1}/${e.works.projects.length.toString().padStart(2,"0")}</span>
          <h3 class="text-xl font-bold text-white leading-snug">${t.title}</h3>
          ${t.company?`<p class="text-white/90 text-sm font-medium">${t.company}</p>`:""}
        </div>
      `).join("")}
    </div>
  </section>

  <section id="gallery" class="py-24 px-8 max-w-6xl mx-auto">
    <h2 class="text-xs tracking-widest text-violet-500 mb-8">${e.gallery.title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #7c3aed, #ec4899);">Portfolio 1</div>
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #0ea5e9, #6366f1);">Portfolio 2</div>
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #f59e0b, #ef4444);">Portfolio 3</div>
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #10b981, #0ea5e9);">Portfolio 4</div>
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #ec4899, #f59e0b);">Portfolio 5</div>
      <div class="aspect-square rounded-2xl flex items-center justify-center text-white font-semibold text-lg" style="background: linear-gradient(135deg, #4f46e5, #10b981);">Portfolio 6</div>
    </div>
  </section>

  <section id="contact" class="py-16 px-8 text-center text-white" style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%);">
    <h2 class="text-5xl font-bold mb-8">${e.contact.title}</h2>
    <a href="mailto:pthvy20@gmail.com" class="inline-block px-10 py-4 bg-white text-violet-700 rounded-full font-semibold hover:scale-105 transition shadow-lg">${e.contact.cta}</a>
    <p class="mt-8 text-white/80">0708 575 775 • pthvy@gmail.com</p>
  </section>

  <footer class="text-white py-16 px-8" style="background: #1e1b4b;">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
      <div>
        <h4 class="font-semibold mb-4 text-white">${e.footer.name}</h4>
        <p class="text-white text-sm">${e.footer.role}</p>
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider text-violet-300">${e.footer.nav}</h5>
        ${e.footer.navLinks.map(t=>`<a href="#${t.toLowerCase()}" class="block text-violet-400 text-sm mb-2 hover:text-yellow-400 transition">${t}</a>`).join("")}
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider text-violet-300">${e.footer.services}</h5>
        ${e.footer.servicesList.map(t=>`<p class="text-violet-400 text-sm mb-2">${t}</p>`).join("")}
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider text-violet-300">${e.footer.contactTitle}</h5>
        <a href="mailto:pthvy20@gmail.com" class="block text-violet-400 text-sm mb-2 hover:text-yellow-400 transition">pthvy20@gmail.com</a>
        <a href="tel:0708575775" class="block text-violet-400 text-sm mb-2 hover:text-yellow-400 transition">0708 575 775</a>
      </div>
    </div>
    <p class="text-center text-violet-400 text-sm pt-8 border-t border-violet-800">2026 | ${e.footer.name}</p>
  </footer>
`,document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}d();let a=0;window.toggleLang=()=>{s=s==="en"?"vi":"en",a=0,d()};window.moveProject=e=>{const t=c[s];a=(a+e+t.works.projects.length)%t.works.projects.length;const n=t.works.projects[a];document.getElementById("project-container").innerHTML=`
    <span class="text-white/60 text-sm">0${a+1}/04</span>
    <h4 class="text-xs tracking-widest text-white/60 mt-8">${t.works.project}</h4>
    <h3 class="text-3xl font-bold my-4 text-white">${n.title}</h3>
    <h4 class="text-xs tracking-widest text-white/60 mt-8">${t.works.type}</h4>
    <p class="text-white/80 mt-2">${n.type}</p>
  `};
