export function headerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <header class="header">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
           <img class="navbar-item__img" src="./images/mi-logo.svg" alt="Logo de llaves" />

          </a
          >

          <a
            role="button"
            class="navbar-burger has-text-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-primary">
          <div class="navbar-end">
            <a class="navbar-item has-text-white header__portfolio">
              Portfolio
            </a>
            <a class="navbar-item has-text-white header__servicios">
              Servicios
            </a>
            <a class="navbar-item has-text-white header__contacto">
              Contacto
            </a>
          </div>
        </div>
      </nav>

    <div class="header__ventana modal">
                <a
            role="button"
            class="navbar-burger is-active has-text-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      <nav class = "ventana__contenido">
        <ul>
            <li class="ventana__contenido-item" ><a href="portfolio.html" class = "has-text-white">Portfolio</a></li>
            <li class="ventana__contenido-item"><a href="servicios.html" class = "has-text-white">Servicios</a></li>
            <li class="ventana__contenido-item"><a href="contacto.html" class = "has-text-white">Contacto</a></li>
        </ul>
        </nav>

    </div>
    </header>
  `;

  const header = componentEl.querySelector(".header");

  const portfolioLink = header.querySelector(".header__portfolio");
  const serviciosLink = header.querySelector(".header__servicios");
  const contactoLink = header.querySelector(".header__contacto");
  const burgerModal = header.querySelector(".navbar-burger");
  const ventanaEl = header.querySelector(".header__ventana");
  const cierraVentanaEl = header.querySelector(".is-active");

  //Event listeners
  portfolioLink.addEventListener("click", function () {
    window.location.href = "portfolio.html"; // Redirige a portfolio.html
  });

  serviciosLink.addEventListener("click", function () {
    window.location.href = "servicios.html"; // Redirige a servicios.html
  });

  contactoLink.addEventListener("click", function () {
    window.location.href = "contacto.html"; // Redirige a contacto.html
  });

  burgerModal.addEventListener("click", function () {
    ventanaEl.style.display = "inherit";
  });

  cierraVentanaEl.addEventListener("click", function () {
    ventanaEl.style.display = "";
  });

  el.appendChild(componentEl);
}
