export async function enviarEmail(data) {
  try {
    const response = await fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el email");
    }

    alert("Email enviado con éxito");
  } catch (error) {
    alert("Hubo un problema al enviar el email: " + error.message);
  }
}
