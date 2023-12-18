const myText = new SplitType('#my-text')
gsap.from('.char', {x:0, opacity:0, stagger: 0.06, delay:1, duration:2,})
gsap.from('.navbar', {x:-1100, opacity:0, delay:0.5, duration:3})


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#547880"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#547880",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 3,
    centeredSlides: true,
    loop: true,

   /* effect: 'slider',
    initialSlide: 3,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,*/
 
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


let popupsToggle = document.querySelectorAll(".open-popup"),
    popupClose = document.querySelectorAll(".close");

    popupsToggle.forEach(function(item){
        item.addEventListener('click', function(){
            let popupName = item.getAttribute('data-popup');
            document.getElementById(popupName).style.display ="block";
        })
    })

    popupClose.forEach(function(item){
        item.addEventListener('click', function(){
            let popup = item.closest('.popup');
            popup.style.display ="none";
        })
    })

    window.addEventListener('click', function (e){
        if (e.target.classList.contains('popup')){
            e.target.style.display = "none";
        }
    })

   