$(document).ready(function() {
    // Инициализация слайдера для '.popular-destinations'
    $('.popular-destinations').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: $('.paginator .prev'),
        nextArrow: $('.paginator .next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Инициализация слайдера для '.news'
    $('.news-section .news').slick({
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        prevArrow: $('.news-section .paginator .prev'),
        nextArrow: $('.news-section .paginator .next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Инициализация мобильной версии '.mobnews'
    $('.mobnews').slick({
        infinite: true,
        slidesToShow: 1,  // Для мобильной версии 1 слайд
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.mobnews').siblings('.paginator').find('.prev'),
        nextArrow: $('.mobnews').siblings('.paginator').find('.next'),
        responsive: [
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
});



document.addEventListener('DOMContentLoaded', function() {
    // Находим все дропдауны на странице
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropdown-toggle');
        var menu = dropdown.querySelector('.dropdown-menu');

        // Обработчик клика по кнопке дропдауна
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            menu.classList.toggle('show');
        });

        // Закрытие дропдауна при клике вне его
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        // Обработка выбора элемента из дропдауна
        var items = menu.querySelectorAll('.dropdown-item');
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                button.textContent = this.textContent;
                menu.classList.remove('show');
            });
        });
    });
});