import { headerComponent } from "../components/header.js";
import { getServicios } from "../api/serviciosApi.js";
import { renderServices } from "./serviciosUI.js";
import { footerComponent } from "../components/footer.js";

function initServicios() {
  //Header
  headerComponent(document.querySelector(".header-container"));

  getServicios()
    .then((services) => {
      renderServices(services);
    })
    .catch((error) => {
      console.error("Error cargando servicios:", error);
    });

  //Footer
  footerComponent(document.querySelector(".footer-container"));
}

// Llamar a la función init para iniciar la carga
initServicios();
