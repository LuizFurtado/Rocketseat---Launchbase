const modalOVerlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
  card.addEventListener('click', function() {
    const postId = card.getAttribute('id');
    window.location.href = `/post/${postId}`;
  });
}