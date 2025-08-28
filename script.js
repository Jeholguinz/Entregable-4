// Validación básica del formulario de contacto

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // evita envío automático

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fecha = document.getElementById("fecha").value.trim();

        // Validación de campos vacíos
        if (!nombre || !apellido || !correo || !telefono || !fecha) {
            alert("⚠️ Por favor, complete todos los campos.");
            return;
        }

        // Validación de correo
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            alert("⚠️ Ingrese un correo electrónico válido.");
            return;
        }

        // Validación de teléfono (mínimo 10 dígitos)
        if (telefono.length < 10) {
            alert("⚠️ Ingrese un número de teléfono válido (mínimo 7 dígitos).");
            return;
        }

        // Si todo está bien
        alert("✅ Formulario enviado correctamente. ¡Gracias por contactarme!");
        form.reset();
    });
});