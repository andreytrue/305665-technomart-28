// Contact popup inputs
var contact = document.querySelector(".contact-button");
var contactPopup = document.querySelector(".popup-contact");
var contactClose = contactPopup.querySelector(".popup-close");
var contactForm = contactPopup.querySelector(".popup-contact-form");
var contactName = contactPopup.querySelector(".popup-contact-name");
var contactEmail = contactPopup.querySelector(".popup-contact-email");
var contactText = contactPopup.querySelector(".popup-contact-text");

// Map popup inputs
var mapLink = document.querySelector(".map-button");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".map-popup-close");

// Basket popup inputs
var basketLink = document.querySelector(".button-basket");
var basketPopup = document.querySelector(".popup-basket");
var basketClose = document.querySelector(".popup-basket-close");

// Contact popup

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contact.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("popup-show");

  if (storageName || storageEmail) {
    contactName.value = storageName;
    contactEmail.value = storageEmail;
    contactText.focus();
  } else{
  	contactName.focus();
  }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("popup-show");
  contactPopup.classList.remove("popup-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    contactPopup.classList.remove("popup-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
	    localStorage.setItem("name", contactName.value);
	    localStorage.setItem("email", contactEmail.value);
	    localStorage.setItem("text", contactText.value);
  	}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("popup-show");
      contactPopup.classList.remove("popup-error");
    }
  }
});

// Map popup

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});

// Basket popup

basketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("popup-show");
});

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