export function renderServices(services) {
  const container = document.querySelector(".services-container"); // El contenedor donde mostrar las cards
  container.innerHTML = ""; // Limpiar contenido previo

  const titulo = document.createElement("div");
  titulo.classList.add("portfolio-description");
  titulo.innerHTML = `<span class="portfolio-card__description1">Mis </span>
                    <span class="portfolio-card__description2">servicios</span>`; //Agrego solo el título

  container.appendChild(titulo);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container"); // nuevo contenedor para las cards
  container.appendChild(cardsContainer);

  services.forEach((service) => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card"); //al elemento se le asigna la clase "portfolio-card"
    card.innerHTML = `
      <img src="${service.icono}" alt="${service.icono}" class = "portfolio-card__img"/>
      <h3 class="portfolio-card__title">${service.titulo}</h3>
      <p class="portfolio-card__text">${service.descripcion}</p>
    `;
    cardsContainer.appendChild(card);
  });
}
