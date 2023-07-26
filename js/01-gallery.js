import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </li>`
).join("");
const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const largeSourse = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeSourse}" width="800" height="600">
    `, {
      onShow: (instance) => {
        const closeEscape = (event) => {
          if (event.key === 'Escape') {
            instance.close();
          }
        };

window.addEventListener('keydown', closeEscape);

instance.element().addEventListener('click', (event) => {
  if (event.target.nodeName !== 'IMG') {
      instance.close();
     }
  });
        
onClose: (instance) => {
  window.removeEventListener('keydown', closeEscape);
    };
  }
  });
    instance.show();
  }
});