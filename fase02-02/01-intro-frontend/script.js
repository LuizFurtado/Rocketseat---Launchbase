const modalOVerlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function() {
    const videoId = card.getAttribute('id');
    const video = modalOVerlay.querySelector('iframe');
    video.src = `https://youtube.com/embed/${videoId}`;
    modalOVerlay.classList.add('active');
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOVerlay.classList.remove('active');
  modalOVerlay.querySelector('iframe').src = "";
});