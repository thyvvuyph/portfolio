(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const l={en:{nav:{home:"HOME",about:"ABOUT",works:"WORKS",gallery:"GALLERY",contact:"CONTACT"},hero:{title:"Haley Pham",intro:"Hi, I'm Haley Pham. I graduated Bachelor of Communication Design at RMIT University. My aspiration is to live creatively and build up my experience as a graphic designer. I would love to use and practice my skills in developing and creating graphics and illustrations for websites.",cta:"Contact Me"},about:{title:"ABOUT ME",text:"Hi I'm Haley Pham, a Communication Designer graduated from RMIT University Melbourne. I'm passionate about graphic design, web design, and creating visual content. Where I lack experience, I make up for in my eagerness to learn and adapt.",doing:"WHAT I'M DOING",skills:["GRAPHIC DESIGN","WEB DESIGN","SOCIAL MEDIA","VIDEO EDITING"]},works:{title:"SELECTED PROJECT",project:"PROJECT",type:"TYPE",projects:[{title:"Designing a Social Media App for the Black Experience",type:"Branding Project • Web Design • Mobile Apps"},{title:"E-commerce Platform Redesign",type:"UI/UX Design • Web Design"},{title:"Brand Identity for Tech Startup",type:"Branding Project • Digital Marketing"},{title:"Mobile Banking App Interface",type:"Mobile Apps • UI/UX Design"}]},gallery:{title:"GALLERY",text:"Portfolio images coming soon. Please visit",link:"www.haleydesign.com.au",linkText:"to view my work."},contact:{title:"Have a Cool Project?",cta:"Contact Me"},footer:{name:"Haley Pham",role:"Creative Graphic Designer",nav:"Navigation",navLinks:["Home","About","Work","Gallery"],services:"Services",servicesList:["Graphic Design","Web Design","Social Media","Video Editing"],contactTitle:"Contact"}},vi:{nav:{home:"TRANG CHỦ",about:"GIỚI THIỆU",works:"DỰ ÁN",gallery:"THƯ VIỆN",contact:"LIÊN HỆ"},hero:{title:"Vy Pham",intro:"Xin chào, tôi là Haley Pham. Tôi tốt nghiệp Cử nhân Thiết kế Truyền thông tại Đại học RMIT. Khát vọng của tôi là sống sáng tạo và tích lũy kinh nghiệm với tư cách là một nhà thiết kế đồ họa. Tôi muốn sử dụng và thực hành kỹ năng của mình trong việc phát triển và tạo đồ họa cũng như hình minh họa cho các trang web.",cta:"Liên Hệ"},about:{title:"VỀ TÔI",text:"Xin chào, tôi là Haley Pham, một Nhà thiết kế Truyền thông tốt nghiệp từ Đại học RMIT Melbourne. Tôi đam mê thiết kế đồ họa, thiết kế web và tạo nội dung hình ảnh. Những gì tôi thiếu kinh nghiệm, tôi bù đắp bằng sự háo hức học hỏi và thích nghi.",doing:"CÔNG VIỆC CỦA TÔI",skills:["THIẾT KẾ ĐỒ HỌA","THIẾT KẾ WEB","MẠNG XÃ HỘI","CHỈNH SỬA VIDEO"]},works:{title:"DỰ ÁN NỔI BẬT",project:"DỰ ÁN",type:"LOẠI",projects:[{title:"Thiết kế Ứng dụng Mạng Xã hội cho Cộng đồng Da đen",type:"Dự án Thương hiệu • Thiết kế Web • Ứng dụng Di động"},{title:"Thiết kế lại Nền tảng Thương mại Điện tử",type:"Thiết kế UI/UX • Thiết kế Web"},{title:"Nhận diện Thương hiệu cho Startup Công nghệ",type:"Dự án Thương hiệu • Marketing Số"},{title:"Giao diện Ứng dụng Ngân hàng Di động",type:"Ứng dụng Di động • Thiết kế UI/UX"}]},gallery:{title:"THƯ VIỆN",text:"Hình ảnh portfolio sắp ra mắt. Vui lòng truy cập",link:"www.haleydesign.com.au",linkText:"để xem tác phẩm của tôi."},contact:{title:"Có Dự Án Thú Vị?",cta:"Liên Hệ"},footer:{name:"Haley Pham",role:"Nhà Thiết Kế Đồ Họa Sáng Tạo",nav:"Điều hướng",navLinks:["Trang chủ","Giới thiệu","Dự án","Thư viện"],services:"Dịch vụ",servicesList:["Thiết kế Đồ họa","Thiết kế Web","Mạng Xã hội","Chỉnh sửa Video"],contactTitle:"Liên hệ"}}};let n="en";function g(){const t=l[n];document.querySelector("#app").innerHTML=`
  <nav class="fixed top-0 w-full flex justify-between items-center px-8 py-6 bg-white/90 backdrop-blur-md z-50">
    <div class="flex-1"></div>
    <div class="flex gap-12">
      <a href="#home" class="text-sm font-medium hover:opacity-60 transition">${t.nav.home}</a>
      <a href="#about" class="text-sm font-medium hover:opacity-60 transition">${t.nav.about}</a>
      <a href="#works" class="text-sm font-medium hover:opacity-60 transition">${t.nav.works}</a>
      <a href="#gallery" class="text-sm font-medium hover:opacity-60 transition">${t.nav.gallery}</a>
      <a href="#contact" class="text-sm font-medium hover:opacity-60 transition">${t.nav.contact}</a>
    </div>
    <div class="flex-1 flex justify-end">
      <button onclick="toggleLang()" class="text-sm font-medium hover:opacity-60 transition">${n==="en"?"VI":"EN"}</button>
    </div>
  </nav>

  <section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32">
    <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">${t.hero.title}</h1>
    <p class="max-w-2xl text-lg text-gray-600 mb-12">${t.hero.intro}</p>
    <a href="#contact" class="px-10 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition">${t.hero.cta}</a>
  </section>

  <section id="about" class="py-24 px-8 max-w-6xl mx-auto bg-black text-white">
    <h2 class="text-xs tracking-widest text-gray-400 mb-8">${t.about.title}</h2>
    <p class="text-2xl mb-12 leading-relaxed">${t.about.text}</p>
    
    <h3 class="text-xs tracking-widest text-gray-400 mt-12 mb-8">${t.about.doing}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${t.about.skills.map(e=>`<div class="p-8 border border-gray-800 rounded-lg"><h4 class="text-lg font-semibold">${e}</h4></div>`).join("")}
    </div>
  </section>

  <section id="works" class="py-24 px-8 max-w-6xl mx-auto">
    <h2 class="text-xs tracking-widest text-gray-500 mb-8">${t.works.title}</h2>
    <div class="flex items-center gap-6">
      <button onclick="moveProject(-1)" class="w-12 h-12 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">←</button>
      <div id="project-container" class="flex-1 p-12 border border-gray-200 rounded-lg min-h-[400px]">
        <span class="text-gray-500 text-sm">01/04</span>
        <h4 class="text-xs tracking-widest text-gray-500 mt-8">${t.works.project}</h4>
        <h3 class="text-3xl font-bold my-4">${t.works.projects[0].title}</h3>
        <h4 class="text-xs tracking-widest text-gray-500 mt-8">${t.works.type}</h4>
        <p class="text-gray-600 mt-2">${t.works.projects[0].type}</p>
      </div>
      <button onclick="moveProject(1)" class="w-12 h-12 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">→</button>
    </div>
  </section>

  <section id="gallery" class="py-24 px-8 max-w-6xl mx-auto">
    <h2 class="text-xs tracking-widest text-gray-500 mb-8">${t.gallery.title}</h2>
    <p class="text-gray-600 mb-8">${t.gallery.text} <a href="https://www.haleydesign.com.au" class="underline hover:text-black">${t.gallery.link}</a> ${t.gallery.linkText}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 1</div>
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 2</div>
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 3</div>
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 4</div>
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 5</div>
      <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Portfolio 6</div>
    </div>
  </section>

  <section id="contact" class="py-32 px-8 text-center bg-black text-white">
    <h2 class="text-5xl font-bold mb-12">${t.contact.title}</h2>
    <a href="mailto:pthvy20@gmail.com" class="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">${t.contact.cta}</a>
    <p class="mt-8 text-gray-400">0708 575 775 • www.haleydesign.com.au</p>
  </section>

  <footer class="bg-gray-900 text-white py-16 px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
      <div>
        <h4 class="font-semibold mb-4">${t.footer.name}</h4>
        <p class="text-gray-400 text-sm">${t.footer.role}</p>
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">${t.footer.nav}</h5>
        ${t.footer.navLinks.map(e=>`<a href="#${e.toLowerCase()}" class="block text-gray-400 text-sm mb-2 hover:text-white">${e}</a>`).join("")}
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">${t.footer.services}</h5>
        ${t.footer.servicesList.map(e=>`<p class="text-gray-400 text-sm mb-2">${e}</p>`).join("")}
      </div>
      <div>
        <h5 class="text-sm mb-4 tracking-wider">${t.footer.contactTitle}</h5>
        <a href="mailto:pthvy20@gmail.com" class="block text-gray-400 text-sm mb-2 hover:text-white">pthvy20@gmail.com</a>
        <p class="text-gray-400 text-sm mb-2">0708 575 775</p>
        <a href="https://www.haleydesign.com.au" class="block text-gray-400 text-sm mb-2 hover:text-white">www.haleydesign.com.au</a>
      </div>
    </div>
    <p class="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">2026 | ${t.footer.name}</p>
  </footer>
`,document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}g();let r=0;window.toggleLang=()=>{n=n==="en"?"vi":"en",r=0,g()};window.moveProject=t=>{const e=l[n];r=(r+t+e.works.projects.length)%e.works.projects.length;const o=e.works.projects[r];document.getElementById("project-container").innerHTML=`
    <span class="text-gray-500 text-sm">0${r+1}/04</span>
    <h4 class="text-xs tracking-widest text-gray-500 mt-8">${e.works.project}</h4>
    <h3 class="text-3xl font-bold my-4">${o.title}</h3>
    <h4 class="text-xs tracking-widest text-gray-500 mt-8">${e.works.type}</h4>
    <p class="text-gray-600 mt-2">${o.type}</p>
  `};
