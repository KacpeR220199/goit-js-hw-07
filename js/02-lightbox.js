import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryBox = (galleryItems) =>
  galleryItems
    .map(
      (galleryItem) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"</img>
  </a>
  </li>`
    )
    .join("");
const createGalleryBox = galleryBox(galleryItems);
gallery.innerHTML = createGalleryBox;

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
