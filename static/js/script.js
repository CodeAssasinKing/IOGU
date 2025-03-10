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
    
      //here is first slider 
      const headerswiper = new Swiper(".swiper-header", {
        effect: 'coverflow',
        direction: "horizontal",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 2,
        loop:true,
        coverflowEffect: {
          rotate:0,      // Rotation angle for slides
          stretch: 0,      // Stretch space between slides (in px)
          depth: 0,      // Depth offset in px (slides further away appear smaller)
          modifier: 0,     // Effect multiplier (increase for more extreme effect)
          slideShadows: true, // Enable shadows on slides
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
              // Get the active slide's image element
              const activeSlideImage = this.slides[this.activeIndex].querySelector('.header_image');
        
              // Get the image source URL
              const imageUrl = activeSlideImage.getAttribute('src');
        
              // Set the background image of the header section
              const headerSection = document.getElementById('headerSection');
              headerSection.style.backgroundImage = `url(${imageUrl})`;
            }
          },
    });
    document.getElementById("langToggle").addEventListener("click", function(event) {
      event.preventDefault(); 

      let img = document.getElementById("langImage");
      let text = document.getElementById("langText");

      if (text.innerText === "TM") {
          img.src = "/images/right_logo.png";
          text.innerText = "RU";           
      } else {
          img.src = "/images/logo.png";   
          text.innerText = "TM";         
      }
  });

})