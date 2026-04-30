let index = 0;
let travado = false;

function mudar(direcao) {
  const slides = document.getElementById("slides");
  const total = slides.children.length;

  if (travado) return;

  travado = true;

  index += direcao;

  if (index < 0) {
    index = total - 1;
  }

  if (index >= total) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;

  setTimeout(() => {
    travado = false;
  }, 500);
}
