const modalOVerlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
  card.addEventListener('click', function() {
    const postId = card.getAttribute('id');
    const post = modalOVerlay.querySelector('iframe');
    post.src = `https://blog.rocketseat.com.br/${postId}`;
    modalOVerlay.classList.add('active');
    modal.classList.remove('full-screen');
  });
}

document.querySelector('.open-in-full-modal').addEventListener('click', function() {
  modal.classList.toggle('full-screen');
});

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOVerlay.classList.remove('active');
  modalOVerlay.querySelector('iframe').src = "";
});