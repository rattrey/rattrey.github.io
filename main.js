function openModal(modalId, contentFile) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector('.modal-content');

    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            modalContent.innerHTML = data;
            modal.style.display = "block";
            document.body.classList.add('modal-open');
        })
        .catch(error => console.error('Error loading modal content:', error));
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
}

// close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// close modal on escape key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        var openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
}
