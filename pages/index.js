import { headerComponent } from "../components/header.js";
import { getBienvenidaYpresentacion } from "../api/bienvenidaApi.js";
import { renderBienvenida, renderPresentacion } from "./indexUI.js";
import { getServicios } from "../api/serviciosApi.js";
import { renderServices } from "./serviciosUI.js";
import { formComponent } from "../components/form.js";
import { footerComponent } from "../components/footer.js";

(function () {
  //renderiza todas sus partes llamando a los servicios correspondientes

  //Header
  headerComponent(document.querySelector(".header-container"));
  //Bienvenida y presentacion
  (function () {
    getBienvenidaYpresentacion()
      .then((bienvenida) => {
        //return console.log(bienvenida);
        renderBienvenida(bienvenida);
        renderPresentacion(bienvenida);
      })
      .catch((error) => {
        console.error("Error cargando bienvenida: ", error);
      });
  })();

  //Servicios
  (function () {
    getServicios()
      .then((services) => {
        renderServices(services);
      })
      .catch((error) => {
        console.error("Error cargando servicios: ", error);
      });
  })();

  //Formulario de contacto
  formComponent(document.querySelector(".form-container"));

  //Footer
  footerComponent(document.querySelector(".footer-container"));
})();
