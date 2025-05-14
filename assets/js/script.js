function toggleSeminars() {
    const list = document.getElementById("seminar-list");
    list.style.display = list.style.display === "none" ? "block" : "none";
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = "Thanks for contacting me!";
    this.reset();
});
