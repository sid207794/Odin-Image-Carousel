import './style.css';

const imageNavigation = (function () {
  const nextButton = document.querySelector('.rightButton .next');
  const previousButton = document.querySelector('.leftButton .previous');
  const body = document.querySelector('body');

  let count = 1;

  nextButton.addEventListener('click', () => {
    const images = document.querySelectorAll('.content .images img');
    const imagesLength = images.length;

    if (count - 1 >= 0) {
      images[count - 1].classList.remove('visible');
      images[count - 1].classList.add('hidden');
    } else {
      images[imagesLength - 1].classList.remove('visible');
      images[imagesLength - 1].classList.add('hidden');
    }

    images[count].classList.remove('hidden');
    images[count].classList.add('visible');
    body.style.backgroundImage = `url("${images[count].src}")`;

    if (count === imagesLength - 1) {
      count = 0;
    } else {
      count++;
    }
  });

  previousButton.addEventListener('click', () => {
    const images = document.querySelectorAll('.content .images img');
    const imagesLength = images.length;

    if (count - 1 >= 0) {
      images[count - 1].classList.remove('visible');
      images[count - 1].classList.add('hidden');
    } else {
      images[imagesLength - 1].classList.remove('visible');
      images[imagesLength - 1].classList.add('hidden');
    }

    if (count - 2 >= 0) {
      images[count - 2].classList.remove('hidden');
      images[count - 2].classList.add('visible');
      body.style.backgroundImage = `url("${images[count - 2].src}")`;
    } else if (count === 1) {
      images[imagesLength - 1].classList.remove('hidden');
      images[imagesLength - 1].classList.add('visible');
      body.style.backgroundImage = `url("${images[imagesLength - 1].src}")`;
    } else if (count === 0) {
      images[imagesLength - 2].classList.remove('hidden');
      images[imagesLength - 2].classList.add('visible');
      body.style.backgroundImage = `url("${images[imagesLength - 2].src}")`;
    }

    if (count === 0) {
      count = imagesLength - 1;
    } else {
      count--;
    }
  });
})();
