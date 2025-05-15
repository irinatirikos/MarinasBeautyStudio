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

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let dropdown = this.nextElementSibling;
        let arrowIcon = this.querySelector(".arrow-icon");

        // Toggle only the clicked dropdown
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";

        // Change arrow direction for only the clicked link
        arrowIcon.src = (dropdown.style.display === "block") ? "arrow-up.png" : "arrow-down.png";
    });
});
