var basketLinks=document.querySelectorAll(".button-add-to-basket"),basketPopup=document.querySelector(".popup-basket"),basketClose=document.querySelector(".popup-basket-close");for(let a of basketLinks)a.addEventListener("click",function(a){a.preventDefault(),basketPopup.classList.add("popup-show")});basketClose.addEventListener("click",function(a){a.preventDefault(),basketPopup.classList.remove("popup-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&basketPopup.classList.contains("popup-show")&&(a.preventDefault(),basketPopup.classList.remove("popup-show"))});