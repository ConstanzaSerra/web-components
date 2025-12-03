export function renderBienvenida(bienvenida) {
  const container = document.querySelector(".bienvenida-container"); // El contenedor donde mostrar la info
  container.innerHTML = ""; // Limpiar contenido previo

  bienvenida.forEach((bienvenida) => {
    const card = document.createElement("div");
    card.classList.add("bienvenida-card"); //al elemento se le asigna la clase "portfolio-card"
    card.innerHTML = `
      <div class= "bienvenida-card__texto">
        <h3 class="bienvenida-card__title-principal">Hola</h3>
        <h3 class="bienvenida-card__title">${bienvenida.titulo}</h3>
        </div>
      <img src="${bienvenida.logo}" alt="${bienvenida.logo}" class = "bienvenida-card__img"/>
      
    `;
    container.appendChild(card);
  });
}

export function renderPresentacion(bienvenida) {
  const container = document.querySelector(".presentacion-container"); // El contenedor donde mostrar la info
  container.innerHTML = ""; // Limpiar contenido previo

  bienvenida.forEach((bienvenida) => {
    const card = document.createElement("div");
    card.classList.add("presentacion-card"); //al elemento se le asigna la clase "portfolio-card"
    card.innerHTML = `
      <div class= "presentacion-card__texto">
      <h3 class="presentacion-card__title">${bienvenida.titulo}</h3>
      <h3 class="presentacion-card__descripcion">${bienvenida.descripcion}</h3>
      </div>
      <img src="${bienvenida.mifoto}" alt="${bienvenida.mifoto}" class = "presentacion-card__img"/>
      
    `;
    container.appendChild(card);
  });
}
