// Проверка поддержки webp браузером
// Если поддерживает, то добавляем класс webp 
// Если не поддерживает, добавляем класс no-webp 
export function iswebp() {
    // проверка поддержки webp 
    function testWebp(callBack) {
        let webP = new Image();
        webP.onload = webP.onerror = function() {
            callBack(webP.heihgt == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса 
    testWebp(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

// кастомные стрелки slick
$('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"> <img src="img/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"> <img src="img/arrow-right.svg" alt="arrow-right"></button>',
})

// работа табов поиска
$('.search__tabs-item').on('click', function(e) {
    e.preventDefault();
    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');
    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
})

// работа табов - универсальные классы
$('.tab').on('click', function(e) {
    e.preventDefault();

    $('.tab').removeClass('tab--active');
    $('.tab-content').removeClass('tab-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tab-content--active');
})

$('.products-item__favourite').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('products-item__favourite--active');
})

// кастомные стрелки slick
$('.products-slider').slick({
    dots: true,
    // prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"> <img src="img/arrow-left.svg" alt="arrow-left"></button>',
    // nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"> <img src="img/arrow-right.svg" alt="arrow-right"></button>',
})