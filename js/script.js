$(function(){
    // Slick Slider Part JS Start
    $('.slider-wrapper').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });
    // Slick Slider Part JS End
    
    // Counter UP Part JS Start
    $('.count-number').counterUp({
        delay: 10,
        time: 1000,
    });
    // Counter UP Part JS End

    // Slick Slider Part JS Start
    $('.client-review-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".review-button-left",
        nextArrow: ".review-button-right",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    // Slick Slider Part JS End
})