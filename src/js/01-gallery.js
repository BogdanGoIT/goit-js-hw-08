// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const galleryItemsEl = galleryItems.map(({original, preview, description}) => (`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`)
).join("");

// console.log(galleryItemsEl)

galleryEl.innerHTML = galleryItemsEl

new SimpleLightbox('.gallery a', { /* options */ });




  


