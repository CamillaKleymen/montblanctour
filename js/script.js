$(document).ready(function() {
  // Инициализация слайдера для '.multiple-items'
  // $('.background').slick({
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     dots: true,
  //     arrows: true,
  //     prevArrow: $('.background').siblings('.paginator').find('.prev'),
  //     nextArrow: $('.background').siblings('.paginator').find('.next'),
  //     responsive: [
  //         {
  //             breakpoint: 1024,
  //             settings: {
  //                 slidesToShow: 2,
  //                 slidesToScroll: 1
  //             }
  //         },
  //         {
  //             breakpoint: 768,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         }
  //     ]
  // });

  $('.popular-destinations').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $('.popular-destinations').siblings('.paginator').find('.prev'),
    nextArrow: $('.popular-destinations').siblings('.paginator').find('.next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

  $('.news').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: $('.news').siblings('.paginator').find('.prev'),
      nextArrow: $('.news').siblings('.paginator').find('.next'),
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2.1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

  $('.background').siblings('.paginator').find('.prev').on('click', function() {
      $('.background').slick('slickPrev');
  });
  $('.background').siblings('.paginator').find('.next').on('click', function() {
      $('.background').slick('slickNext');
  });

  $('.popular-destinations').siblings('.paginator').find('.prev').on('click', function() {
      $('.popular-destinations').slick('slickPrev');
  });
  $('.popular-destinations ').siblings('.paginator').find('.next').on('click', function() {
      $('.popular-destinations ').slick('slickNext');
  });

  $('.news').siblings('.paginator').find('.prev').on('click', function() {
      $('.news').slick('slickPrev');
  });
  $('.news').siblings('.paginator').find('.next').on('click', function() {
      $('.news').slick('slickNext');
  });
});