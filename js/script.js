$(document).ready(function() {
    // Инициализация слайдера для '.popular-destinations'
    $('.popular-destinations').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.popular-destinations').siblings('.paginator').find('.prev'),
        nextArrow: $('.popular-destinations').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

    // Инициализация слайдера для '.news'
    $('.news').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.news').siblings('.paginator').find('.prev'),
        nextArrow: $('.news').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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


    $('.mobnews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.mobnews').siblings('.paginator').find('.prev'),
        nextArrow: $('.mobnews').siblings('.paginator').find('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

    // Инициализация слайдера для '.advantages-slider'
    $('.advantages-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev">Previous</button>',
        nextArrow: '<button class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        ]
    });

    // Общая функция для управления кнопками слайдера
    $('.paginator .prev, .paginator .next').on('click', function() {
        var $slider = $(this).closest('.section').find('.slick-slider');
        if ($(this).hasClass('prev')) {
            $slider.slick('slickPrev');
        } else {
            $slider.slick('slickNext');
        }
    });
});