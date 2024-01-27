// buat toggle class activ biar muncul klo dipencet (dimenu)
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger diklick
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


//klick diluar sidebar utk menghilngkn nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   let currentIndex = 0;
//   const images = [
//      '../img/galaxy-s23-series-home-kv-1440x640.webp',
//      '../img/f5.webp',
//      '../img/redmi12.webp',
//      // Tambahkan URL gambar lainnya di sini
//   ];
//   const sliderImage = document.querySelector('.slider-image');

//   function changeImage() {
//      currentIndex = (currentIndex + 1) % images.length;
//      sliderImage.style.opacity = 0;
//      setTimeout(() => {
//         sliderImage.src = images[currentIndex];
//         sliderImage.style.opacity = 1;
//      }, 1000);
//   }

//   // Atur interval untuk mengubah gambar setiap 5 detik (5000 milidetik)
//   setInterval(changeImage, 5000);
// });

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const images = [
      '../img/galaxy-s23-series-home-kv-1440x640.webp',
      '../img/f5.webp',
     '../img/redmi12.webp',
      // Tambahkan URL gambar lainnya di sini
  ];
  const sliderImages = document.querySelector('.slider-images');

  function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      const newPosition = -currentIndex * 100;
      sliderImages.style.transform = `translateX(${newPosition}%)`;
  }

  // Atur interval untuk mengubah gambar setiap 5 detik (5000 milidetik)
  setInterval(changeImage, 5000);
});


  document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navbar-nav a');

    window.addEventListener('scroll', function() {
      var currentSection = "";

      sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 50;
        var sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });

      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    });
  });


  //scroll fungction
  const revealElements = document.querySelectorAll(".reveal");

  function checkScroll() {
      for (let element of revealElements) {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < window.innerHeight - 100 && elementTop > -element.clientHeight) {
              element.classList.add("revealed");
          } else {
              element.classList.remove("revealed");
          }
      }
  }
  
  function animate() {
      checkScroll();
      requestAnimationFrame(animate);
  }
  
  animate();