$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        freeMode: true,
        loop: true,
        centeredSlides: true,
        lazy: true,
        simulateTouch: true,
        slideToClickedSlide: true,
        grabCursor: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: -40,
            depth: 500,
            modifier: 1,
            sliderShadows: false,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
             
          }
  
    });



});
//https://swiperjs.com/demos#infinite-loop-with-slides-per-group        https://swiperjs.com/swiper-api#parameters


 /*    
 
 
 
 
 slidesPerView: 3,

        freeMode: true,
        centeredSlides: true,
        

       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        history: {
            key: 'slide',
        },

        lazy: true,
        simulateTouch: true,
        slideToClickedSlide: true,

        grabCursor: true,

        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: -40,
            depth: 500,
            modifier: 1,
            sliderShadows: true,
 
 
 
     effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  initialSlide: 0,
  keyboardControl: true,
  mousewheelControl: true,
  lazyLoading: true,
  preventClicks: false,
  preventClicksPropagation: false,
  lazyLoadingInPrevNext: true,

  simulateTouch: true,
        slideToClickedSlide: true,

        grabCursor: true,
   
  coverflow: {
            rotate: 20,
            stretch: -40,
            depth: 500,
            modifier: 1,
    slideShadows: false,
        },
  
 
 
 
 
 
 
 
 
 breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },

        */