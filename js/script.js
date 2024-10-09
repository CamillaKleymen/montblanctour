$(document).ready(function() {
    // Инициализация слайдера для '.multiple-items'
    $('.background').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.background').siblings('.paginator').find('.prev'),
        nextArrow: $('.background').siblings('.paginator').find('.next'),
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

    // Инициализация слайдера для '.popular-destinations 
    $('.popular-destinations').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.slick-dots'),
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

    // Инициализация слайдера для '.testimonial 
    $('.news').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.news').siblings('.paginator').find('.prev'),
        nextArrow: $('.news').siblings('.paginator').find('.next'),
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

    // Обработчики событий для кнопок 
    $('.background').siblings('.paginator').find('.prev').on('click', function() {
        $('.background').slick('slickPrev');
    });
    $('.background').siblings('.paginator').find('.next').on('click', function() {
        $('.background').slick('slickNext');
    });

    // Обработчики событий для кнопок '.popular-destinations
    $('.popular-destinations').siblings('.paginator').find('.prev').on('click', function() {
        $('.popular-destinations').slick('slickPrev');
    });
    $('.popular-destinations ').siblings('.paginator').find('.next').on('click', function() {
        $('.popular-destinations ').slick('slickNext');
    });

    // Обработчики событий для кнопок '.testimonial 
    $('.news').siblings('.paginator').find('.prev').on('click', function() {
        $('.news').slick('slickPrev');
    });
    $('.news').siblings('.paginator').find('.next').on('click', function() {
        $('.news').slick('slickNext');
    });
});