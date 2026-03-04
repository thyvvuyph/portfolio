import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="fixed top-0 w-full flex justify-center gap-12 px-8 py-6 bg-white/90 backdrop-blur-md z-50">
    <a href="#home" class="text-sm font-medium hover:opacity-60 transition">HOME</a>
    <a href="#about" class="text-sm font-medium hover:opacity-60 transition">ABOUT</a>
    <a href="#works" class="text-sm font-medium hover:opacity-60 transition">WORKS</a>
    <a href="#gallery" class="text-sm font-medium hover:opacity-60 transition">GALLERY</a>
    <a href="#contact" class="text-sm font-medium hover:opacity-60 transition">CONTACT</a>
  </nav>

  <section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32">
    <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">Creative Graphic Designer<br>Based in Vietnam</h1>
    <p class="max-w-2xl text-lg text-gray-600 mb-12">I graduated Bachelor of Communication Design at RMIT University. My aspiration is to live creatively and build up my experience as a graphic designer. I would love to use and practice my skills in developing and creating graphics and illustrations for websites.</p>
    <a href="#contact" class="px-10 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition">Contact Me</a>
  </section>

  <section id="about" class="py-24 px-8 max-w-6xl mx-auto bg-black text-white">
    <h2 class="text-xs tracking-widest text-gray-400 mb-8">ABOUT ME</h2>
    <p class="text-2xl mb-12 leading-relaxed">Hi I'm Phạm Thuỳ Vy (Haley), a Communication Designer graduated from RMIT University Melbourne. I'm passionate about graphic design, web design, and creating visual content. Where I lack experience, I make up for in my eagerness to learn and adapt.</p>
    
    <h3 class="text-xs tracking-widest text-gray-400 mt-12 mb-8">WHAT I'M DOING</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="p-8 border border-gray-800 rounded-lg">
        <h4 class="text-lg font-semibold">GRAPHIC DESIGN</h4>
      </div>
      <div class="p-8 border border-gray-800 rounded-lg">
        <h4 class="text-lg font-semibold">WEB DESIGN</h4>
      </div>
      <div class="p-8 border border-gray-800 rounded-lg">
        <h4 class="text-lg font-semibold">SOCIAL MEDIA</h4>
      </div>
      <div class="p-8 border border-gray-800 rounded-lg">
        <h4 class="text-lg font-semibold">VIDEO EDITING</h4>
      </div>
    </div>
  </section>

  <section id="works" class="py-24 px-8 max-w-6xl mx-auto">
    <h2 class="text-xs tracking-widest text-gray-500 mb-8">SELECTED PROJECT</h2>
    <div class="flex items-center gap-6">
      <button onclick="moveProject(-1)" class="w-12 h-12 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">←</button>
      <div id="project-container" class="flex-1 p-12 border border-gray-200 rounded-lg min-h-[400px]">
        <span class="text-gray-500 text-sm">01/04</span>
        <h4 class="text-xs tracking-widest text-gray-500 mt-8">PROJECT</h4>
        <h3 class="text-3xl font-bold my-4">Designing a Social Media App for the Black Experience</h3>
        <h4 class="text-xs tracking-widest text-gray-500 mt-8">TYPE</h4>
        <p class="text-gray-600 mt-2">Branding Project • Web Design • Mobile Apps</p>
      </div>
      <button onclick="moveProject(1)" class="w-12 h-12 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">→</button>
    </div>
  </section>

  <section id="gallery" class="py-24 px-8 max-w-6xl mx-auto">
    <h2 class="text-xs tracking-widest text-gray-500 mb-8">GALLERY</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-01.svg" alt="Portfolio 1" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-02.svg" alt="Portfolio 2" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-03.svg" alt="Portfolio 3" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-04.svg" alt="Portfolio 4" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-05.svg" alt="Portfolio 5" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-06.svg" alt="Portfolio 6" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-07.svg" alt="Portfolio 7" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-08.svg" alt="Portfolio 8" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-09.svg" alt="Portfolio 9" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-10.svg" alt="Portfolio 10" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-11.svg" alt="Portfolio 11" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-12.svg" alt="Portfolio 12" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-13.svg" alt="Portfolio 13" class="w-full h-full object-cover">
      </div>
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img src="/Port1-14.svg" alt="Portfolio 14" class="w-full h-full object-cover">
      </div>
    </div>
  </section>

  <section id="contact" class="py-32 px-8 text-center bg-black text-white">
    <h2 class="text-5xl font-bold mb-12">Have a Cool Project?</h2>
    <a href="mailto:pthvy20@gmail.com" class="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">Contact Me</a>
    <p class="mt-8 text-gray-400">0708 575 775 • www.haleydesign.com.au</p>
  </section>

  <footer class="bg-gray-900 text-white py-16 px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
      <div>
        <h4 class="font-semibold mb-4">Phạm Thuỳ Vy (Haley)</h4>
        <p class="text-gray-400 text-sm">Creative Graphic Designer</p>
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">Navigation</h5>
        <a href="#home" class="block text-gray-400 text-sm mb-2 hover:text-white">Home</a>
        <a href="#about" class="block text-gray-400 text-sm mb-2 hover:text-white">About</a>
        <a href="#works" class="block text-gray-400 text-sm mb-2 hover:text-white">Work</a>
        <a href="#gallery" class="block text-gray-400 text-sm mb-2 hover:text-white">Gallery</a>
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">Services</h5>
        <p class="text-gray-400 text-sm mb-2">Graphic Design</p>
        <p class="text-gray-400 text-sm mb-2">Web Design</p>
        <p class="text-gray-400 text-sm mb-2">Social Media</p>
        <p class="text-gray-400 text-sm mb-2">Video Editing</p>
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">Contact</h5>
        <a href="mailto:pthvy20@gmail.com" class="block text-gray-400 text-sm mb-2 hover:text-white">pthvy20@gmail.com</a>
        <p class="text-gray-400 text-sm mb-2">0708 575 775</p>
        <a href="https://www.haleydesign.com.au" class="block text-gray-400 text-sm mb-2 hover:text-white">www.haleydesign.com.au</a>
      </div>
    </div>
    <p class="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">2026 | Phạm Thuỳ Vy</p>
  </footer>
`

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Project carousel
let currentProject = 0
const projects = [
  { num: '01/04', title: 'Designing a Social Media App for the Black Experience', type: 'Branding Project • Web Design • Mobile Apps' },
  { num: '02/04', title: 'E-commerce Platform Redesign', type: 'UI/UX Design • Web Design' },
  { num: '03/04', title: 'Brand Identity for Tech Startup', type: 'Branding Project • Digital Marketing' },
  { num: '04/04', title: 'Mobile Banking App Interface', type: 'Mobile Apps • UI/UX Design' }
]

window.moveProject = (dir) => {
  currentProject = (currentProject + dir + projects.length) % projects.length
  const p = projects[currentProject]
  document.getElementById('project-container').innerHTML = `
    <span class="text-gray-500 text-sm">${p.num}</span>
    <h4 class="text-xs tracking-widest text-gray-500 mt-8">PROJECT</h4>
    <h3 class="text-3xl font-bold my-4">${p.title}</h3>
    <h4 class="text-xs tracking-widest text-gray-500 mt-8">TYPE</h4>
    <p class="text-gray-600 mt-2">${p.type}</p>
  `
}
