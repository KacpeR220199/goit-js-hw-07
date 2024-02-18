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

gallery.addEventListener("click", isClick);

const lightbox = basicLightbox.create(
  `<img class="big__img" src="" width="1280">`,
  {
    onShow: () => window.addEventListener("keydown", onEscape),
    onClose: () => window.removeEventListener("keydown", onEscape),
  }
);
function isClick(event) {
  event.preventDefault();
  const dataSource = event.target.dataset.source;
  if (!dataSource) return;
  lightbox.element().querySelector("img").src = dataSource;
  lightbox.show();
}
function onEscape(event) {
  if (event.key !== "Escape") return;
  lightbox.close();
}
