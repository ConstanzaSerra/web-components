import { headerComponent } from "../components/header.js";
import { footerComponent } from "../components/footer.js";
import { getPortfolio } from "../api/portfolioApi.js";
import { renderPortfolio } from "./portfolioUI.js";

(function () {
  //Header
  headerComponent(document.querySelector(".header-container"));

  getPortfolio()
    .then((works) => {
      renderPortfolio(works);
    })
    .catch((error) => {
      console.error("Error cargando portfolio:", error);
    });

  //Footer
  footerComponent(document.querySelector(".footer-container"));
})();
