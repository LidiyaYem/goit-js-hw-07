import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item"> 
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");


galleryList.insertAdjacentHTML("beforeend", markup);
galleryList.addEventListener('click', onGalleryImageClick);


function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const urlOfOriginImg = evt.target.dataset.source;

  const lightboxEsc = {
  onShow: () => {
    document.addEventListener('keydown', onEscKeydown)
  },
  onClose: () => {
    document.addEventListener('keydown', onEscKeydown)
  }
}
  
  const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${urlOfOriginImg}"
      data-source="${galleryItems.original}"
      alt="${galleryItems.description}"
    />`,
    lightboxEsc
    )
  instance.show()


  function onEscKeydown(evt) {
  if (evt.code === 'Escape' && instance.visible()) {
    instance.close();
  }
}
}



  