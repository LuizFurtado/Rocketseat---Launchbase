const hideSectionElement = document.querySelectorAll('.hide-section');

for (let item of hideSectionElement) {
  item.addEventListener('click', function() {
    const parentEl = item.parentElement;
    parentEl.nextElementSibling.classList.toggle('hide-element');
  });
}