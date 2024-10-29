// burger menu
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const headerMenu = document.querySelector('.header-menu');

    burgerMenu.addEventListener('click', function () {
        headerMenu.classList.toggle('active'); 
    });
});
// carusel banner
const slides2 = document.querySelectorAll('.slide2');
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');
const paginationContainer2 = document.querySelector('.pagination2');
let currentIndex2 = 0;

// Функция для показа слайда
function showSlide2(index) {
    if (index < 0) {
        currentIndex2 = slides2.length - 1;
    } else if (index >= slides2.length) {
        currentIndex2 = 0;
    } else {
        currentIndex2 = index;
    }

    const slidesContainer2 = document.querySelector('.slides2');
    slidesContainer2.style.transform = `translateX(-${currentIndex2 * 100}%)`;

    updatePagination2();
}

// Обновление пагинации
function updatePagination2() {
    paginationContainer2.innerHTML = ''; // Очищаем контейнер

    // Создаем индикаторы в зависимости от количества слайдов
    for (let i = 0; i < slides2.length; i++) {
        const button = document.createElement('button');
        button.classList.toggle('active', i === currentIndex2);
        button.addEventListener('click', () => showSlide2(i));
        paginationContainer2.appendChild(button);
    }
}

// Обработчики событий для кнопок
prevButton2.addEventListener('click', () => {
    showSlide2(currentIndex2 - 1);
});

nextButton2.addEventListener('click', () => {
    showSlide2(currentIndex2 + 1);
});

// Инициализация слайдера и пагинации
showSlide2(currentIndex2);



// carusel business
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const paginationContainer = document.querySelector('.pagination');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    updatePagination();
}

function updatePagination() {
    paginationContainer.innerHTML = ''; 

    for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.classList.toggle('active', i === currentIndex);
        button.addEventListener('click', () => showSlide(i));
        paginationContainer.appendChild(button);
    }
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);
