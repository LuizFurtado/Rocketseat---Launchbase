const receitas = [
  {
    id: 1,
    title: "Triplo bacon burger",
    author: "Jorge Relato",
    imgUrl: "imgs/burger.png"
  },
  {
    id: 2,
    title: "Pizza 4 estações",
    author: "Fabiana Melo",
    imgUrl: "imgs/pizza.png"
  },
  {
    id: 3,
    title: "Espaguete ao alho",
    author: "Júlia Kinoto",
    imgUrl: "imgs/espaguete.png"
  },
  {
    id: 4,
    title: "Lasanha mac n’ cheese",
    author: "Juliano Vieira",
    imgUrl: "imgs/lasanha.png"
  },
  {
    id: 5,
    title: "Docinhos pão-do-céu",
    author: "Ricardo Golvea",
    imgUrl: "imgs/doce.png"
  },
  {
    id: 6,
    title: "Asinhas de frango ao barbecue",
    author: "Vania Steroski",
    imgUrl: "imgs/asinhas.png"
  },
]

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
  card.addEventListener('click', function() {
    const receitaId = card.getAttribute('id');
    const htmlCard = `
        <div class="card">
          <div class="card__img-container">
            <img src="${receitas[receitaId - 1].imgUrl}" alt="${receitas[receitaId - 1].title}">
          </div>
          <h3 class="card__card-title">
            ${receitas[receitaId - 1].title}
          </h3>
          <p class="card__card-autor">
            por ${receitas[receitaId - 1].author}
          </p>

          <a class="close-modal">Fechar modal</a>
        </div>
    `
    modal.innerHTML = htmlCard;
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    modalOverlay.classList.add('active');
  });
}

function closeModal() {
  modal.innerHTML = "";
  modalOverlay.classList.remove('active');
};