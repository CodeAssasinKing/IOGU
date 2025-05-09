document.addEventListener("DOMContentLoaded", ()=>{
    //here is second slider 
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        coverflowEffect: {
          rotate: 50,      // Rotation angle for slides
          stretch: 0,      // Stretch space between slides (in px)
          depth: 50,      // Depth offset in px (slides further away appear smaller)
          modifier: 1,     // Effect multiplier (increase for more extreme effect)
          slideShadows: true, // Enable shadows on slides
        },  
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    
    
      //here is third slider
      const swiper2 = new Swiper('.swiper', {
        effect: 'coverflow',
        direction: "vertical",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        loop: true,
        coverflowEffect: {
          rotate:0,      // Rotation angle for slides
          stretch: 0,      // Stretch space between slides (in px)
          depth: 300,      // Depth offset in px (slides further away appear smaller)
          modifier: 3,     // Effect multiplier (increase for more extreme effect)
          slideShadows: true, // Enable shadows on slides
        },  
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    
})






