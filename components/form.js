import { enviarEmail } from "../api/emailApi.js";

export function formComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    <section class="contacto">
      <h2 class="contacto__title">Escribime</h2>
      <form class="contacto__form">
      <div class = "contacto__nombre_email">
             <label>
          <h3 class="contacto__label">Nombre</h3>
          <input class="contacto__input contacto__nombre" type="text" name="nombre" placeholder = "Tu nombre"/>
        </label>
        <label>
          <h3 class="contacto__label">Email</h3>
          <input class="contacto__input contacto__email" type="text" name="email" placeholder = "tu@mail.com"/>
        </label>
      </div>   
        <label>
          <h3 class="contacto__label">Mensaje</h3>
          <textarea class="contacto__input contacto__mensaje" name="mensaje"></textarea>
        </label>
        <div class="contacto__submit-cont">
          <button class="contacto__submit-button ">Enviar</button>
          <i class="fas fa-paper-plane contacto__avion"></i> 
        </div>
      </form>
    </section>
  `;

  el.appendChild(componentEl);

  const form = componentEl.querySelector(".contacto__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(form);
    const data = {
      to: "tu-email-de-estudiante@gmail.com",
      message: `Nombre: ${formData.get("nombre")}\nEmail: ${formData.get(
        "email"
      )}\nMensaje: ${formData.get("mensaje")}`,
    };

    // Acá podés llamar a una función fetch que esté en otro módulo para enviar el email
    enviarEmail(data);
  });
}
