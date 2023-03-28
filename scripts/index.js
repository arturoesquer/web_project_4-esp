let inputName = document.querySelector(".input__name");
let inputAbout = document.querySelector(".input__about");
let editButton = document.querySelector(".profile__info-edit-button");
let closePopup = document.querySelector(".popup__close-button");
let profileName = document.querySelector(".profile__info-name");
let profileAbout = document.querySelector(".profile__info-description");
let saveButton = document.querySelector(".popup__save-button");

document.querySelector(".profile__info-edit-button").addEventListener("click", function(){document.querySelector(".popup").classList.add("popup-opened");});
document.querySelector(".popup__close-button").addEventListener("click", function(){document.querySelector(".popup").classList.remove("popup-opened");});
document.querySelector(".profile__info-edit-button").addEventListener("click", function(){document.querySelector(".overlay").classList.add("overlay-visible");});
document.querySelector(".popup__close-button").addEventListener("click", function(){document.querySelector(".overlay").classList.remove("overlay-visible");});
document.querySelector(".popup__save-button").addEventListener("click", function(){document.querySelector(".popup").classList.remove("popup-opened");});
document.querySelector(".popup__save-button").addEventListener("click", function(){document.querySelector(".overlay").classList.remove("overlay-visible");});


inputName.value = profileName.textContent;
inputAbout.value = profileAbout.textContent;

function changeProfileInfo () {
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
}

saveButton.addEventListener("click", changeProfileInfo);
changeProfileInfo();
