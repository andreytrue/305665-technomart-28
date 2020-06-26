// Basket popup inputs
var basketLinks = document.querySelectorAll(".button-add-to-basket");
var basketPopup = document.querySelector(".popup-basket");
var basketClose = document.querySelector(".popup-basket-close");

// Basket popup

for (let basketLink of basketLinks){
	basketLink.addEventListener("click", function (evt) {
	  evt.preventDefault();
	  basketPopup.classList.add("popup-show");
	});
}

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("popup-show");
    }
  }
});