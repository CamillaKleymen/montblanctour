$(document).ready(function() {
    // Инициализация слайдера для '.popular-destinations'
    $('.popular-destinations').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.paginator .prev'),
        nextArrow: $('.paginator .next'),
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

    // Инициализация слайдера для '.news'
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

    // Управление кнопками слайдера
    $('.paginator .prev').on('click', function() {
        $(this).siblings('.popular-destinations, .news').slick('slickPrev');
    });
    $('.paginator .next').on('click', function() {
        $(this).siblings('.popular-destinations, .news').slick('slickNext');
    });
});

// Функция переключения выпадающего меню
function toggleDropdown(event) {
    event.preventDefault();
    var dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Закрытие выпадающих меню при клике вне их
function closeDropdowns(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Добавление обработчиков для выпадающих меню
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', toggleDropdown);
    });

    // Закрытие выпадающего меню при клике вне его
    window.addEventListener('click', closeDropdowns);
});
