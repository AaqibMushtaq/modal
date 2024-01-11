const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
const overlayModal = document.querySelector(".Overlay-modal-container");
const bottomClose = document.querySelector(".bottom-Close");
openButton.addEventListener("click", function () {
  overlayModal.classList.add("visible-modal");
});
closeButton.addEventListener("click", function () {
  overlayModal.classList.remove("visible-modal");
});
bottomClose.addEventListener("click", function () {
  overlayModal.classList.remove("visible-modal");
});
