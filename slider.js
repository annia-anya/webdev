let currentIndex = 1;
const maxIndex = 5;
const minIndex = 1;
const imageWidth = 437;

const currentIndexElement = document.querySelector('.js-current-index');
const images = document.querySelector('.js-slider-images');

const clickHandler = (event) => {
    const button = event.target;
    if (button.dataset.direction === 'right') {
        currentIndex = currentIndex === minIndex ? minIndex : currentIndex - 1;
    } else if (button.dataset.direction === 'left') {
        currentIndex = currentIndex === maxIndex ? maxIndex : currentIndex + 1;
    }
    currentIndexElement.innerHTML = currentIndex;
    [...images.children].forEach((image, i) => {
        if (i + 1 > currentIndex - 1) {
            image.style.width = '407px';
        } else {
            image.style.width = 0;
        }
    })
};

const sliderButtons = [...document.getElementsByClassName('js-arrow')];

sliderButtons.forEach((button) => { button.addEventListener('click', clickHandler)});