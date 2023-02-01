// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from '../../node_modules/simplelightbox/src/simple-lightbox.js';

import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

const galaryList = document.querySelector('.gallery');
function createGalaryMarkup(array) {
  return array
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}
galaryList.insertAdjacentHTML('beforeend', createGalaryMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
