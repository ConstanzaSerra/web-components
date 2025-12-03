export function renderPortfolio(works) {
  const container = document.querySelector(".portfolio-container"); // El contenedor donde mostrar las cards
  container.innerHTML = ""; // Limpiar contenido previo

  const titulo = document.createElement("div");
  titulo.classList.add("portfolio-description");
  titulo.innerHTML = `
                  <div class = "portfolio-card__texto">
                    <span class="portfolio-card__description1">Mis </span>
                    <span class="portfolio-card__description2">trabajos</span>
                    </div>                  
                    <img src = ../assets/maletin.png alt="maletin" class = "portfolio-card__maletin">`;

  container.appendChild(titulo);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container"); // nuevo contenedor para las cards
  container.appendChild(cardsContainer);

  works.forEach((work) => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card"); //al elemento se le asigna la clase "portfolio-card"
    card.innerHTML = `
      <img src="${work.imagen}" alt="${work.imagen}" class = "portfolio-card__img"/>
      <h3 class="portfolio-card__title">${work.titulo}</h3>
      <p class="portfolio-card__text">${work.descripcion}</p>
      <a class="portfolio-card__url">${work.url}</a>
    `;
    cardsContainer.appendChild(card);
  });
}
