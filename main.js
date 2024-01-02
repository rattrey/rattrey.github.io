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

document.addEventListener('DOMContentLoaded', function() {
    const ele = document.querySelector('.portfolio-container');
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            x: e.clientX,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        const dx = e.clientX - pos.x;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function() {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});


function toggleDetails(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('click', function() {
        var detailBox = this.querySelector('.detail-box');
        if (detailBox.style.display === "none" || detailBox.style.display === "") {
            detailBox.style.display = "block";
        } else {
            detailBox.style.display = "none";
        }
    });
});
