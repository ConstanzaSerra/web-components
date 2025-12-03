import { headerComponent } from "../components/header.js";
import { formComponent } from "../components/form.js";
import { footerComponent } from "../components/footer.js";

(function () {
  //renderiza todas sus partes llamando a los servicios correspondientes

  //Header
  headerComponent(document.querySelector(".header-container"));

  //Formulario de contacto
  formComponent(document.querySelector(".form-container"));

  //Footer
  footerComponent(document.querySelector(".footer-container"));
})();
