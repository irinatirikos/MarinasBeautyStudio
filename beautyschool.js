function showPopup(imageUrl) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = imageUrl;
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}