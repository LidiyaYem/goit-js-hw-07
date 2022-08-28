import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"
    />
</a>`).join("");


galleryList.insertAdjacentHTML("beforeend", markup);


let gallery = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

gallery.on('show.simplelightbox');