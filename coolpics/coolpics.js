const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
});
// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // only run if an image was clicked
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    // convert small image to full image
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', closeModal);

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to close modal
function closeModal() {
    modal.close();
}

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});