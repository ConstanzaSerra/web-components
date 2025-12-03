export function footerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
          <footer class="footer">
        <div class="content has-text-centered">
          <img src="./images/mi-logo.svg" alt="" class="footer__logo" />
          <footer>
            <nav class="has-text-centered">
              <ul class="footer-menu">
                <li>
                  <span class="icon-text">
                    <span class="icon"><i class="fas fa-home"></i></span>
                    <a href="index.html" class="has-text-white">Home</a>
                  </span>
                </li>
                <li>
                  <span class="icon-text">
                    <span class="icon"><i class="fas fa-user"></i></span>
                    <a href="servicios.html" class="has-text-white"
                      >Servicios</a
                    >
                  </span>
                </li>
                <li>
                  <span class="icon-text">
                    <span class="icon"><i class="fas fa-phone"></i></span>
                    <a href="contacto.html" class="has-text-white">Contacto</a>
                  </span>
                </li>
              </ul>
            </nav>

            <div class="has-text-centered">
              <nav aria-label="Redes sociales">
                <ul class="social-links">
                  <li>
                    <a
                      href="https://linkedin.com/tu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-white"
                      ><i class="fas fa-brands fa-linkedin"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/tu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-white"
                      ><span class="icon"
                        ><i class="fas fa-brands fa-github"></i></span
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/tu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="has-text-white"
                      ><i class="fas fa-brands fa-x-twitter"></i
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>

            <p class="footer-copy">
              &copy; 2025 - Todos los derechos reservados
            </p>
          </footer>
        </div>
      </footer>
  `;

  el.appendChild(componentEl);
}
