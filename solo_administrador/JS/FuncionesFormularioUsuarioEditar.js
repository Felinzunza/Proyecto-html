// =====================
// Validaciones Editar Usuario
// =====================

// Validación básica de RUT
function validarRut() {
  let rut = document.getElementById("rut").value;
  if (!rut.includes(".") && rut.length >= 7 && rut.length <= 9) {
    return true;
  } else {
    return false;
  }
}

// Validación de nombre
function validarNombre() {
  let nombre = document.getElementById("nombre").value.trim();
  if (nombre.length > 0 && nombre.length <= 50) {
    document.getElementById("checknombre").innerHTML = "✅";
    return true;
  } else {
    document.getElementById("checknombre").innerHTML =
      "Nombre incorrecto ⛔";
    return false;
  }
}

// Validación de apellido
function validarApellido() {
  let apellido = document.getElementById("apellido").value.trim();
  if (apellido.length > 0 && apellido.length <= 100) {
    document.getElementById("checkapellido").innerHTML = "✅";
    return true;
  } else {
    document.getElementById("checkapellido").innerHTML =
      "Apellido incorrecto ⛔";
    return false;
  }
}

// Validación de email
function validarEmail() {
  let mail = document.getElementById("mail").value;

  if (
    mail.length > 100 ||
    !(
      mail.endsWith("@duoc.cl") ||
      mail.endsWith("@duocuc.cl") ||
      mail.endsWith("@profesor.duoc.cl") ||
      mail.endsWith("@gmail.com.cl") ||
      mail.endsWith("@gmail.com")
    )
  ) {
    document.getElementById("checkemail").innerHTML =
      "Correo incorrecto ⛔";
    return false;
  } else {
    document.getElementById("checkemail").innerHTML = "✅";
    return true;
  }
}

// Validación de fecha
function validarFecha() {
  let fecha = new Date(document.getElementById("fecha").value);
  let min = new Date("1900-01-01");
  let hoy = new Date();

  if (fecha < min || fecha > hoy || isNaN(fecha.getTime())) {
    document.getElementById("checkfecha").innerHTML = "Fecha incorrecta ⛔";
    return false;
  } else {
    document.getElementById("checkfecha").innerHTML = "✅";
    return true;
  }
}

// Validación de dirección
function validarDireccion() {
  let direccion = document.getElementById("direccion").value.trim();
  if (direccion.length > 0 && direccion.length <= 200) {
    document.getElementById("checkdireccion").innerHTML = "✅";
    return true;
  } else {
    document.getElementById("checkdireccion").innerHTML =
      "Dirección incorrecta ⛔";
    return false;
  }
}

// =====================
// Control de envío
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".needs-validation");
  if (!form) return;

  // Enganchar validación en cada campo
  document.getElementById("nombre").addEventListener("input", validarNombre);
  document.getElementById("apellido").addEventListener("input", validarApellido);
  document.getElementById("rut").addEventListener("input", validarRut);
  document.getElementById("mail").addEventListener("input", validarEmail);
  document.getElementById("fecha").addEventListener("change", validarFecha);
  document.getElementById("direccion").addEventListener("input", validarDireccion);

  form.addEventListener("submit", function (ev) {
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const rutValido = validarRut();
    const emailValido = validarEmail();
    const fechaValida = validarFecha();
    const direccionValida = validarDireccion();

    if (
      !form.checkValidity() ||
      !nombreValido ||
      !apellidoValido ||
      !rutValido ||
      !emailValido ||
      !fechaValida ||
      !direccionValida
    ) {
      ev.preventDefault(); // ❌ Bloquea el envío
      ev.stopPropagation();
      form.classList.add("was-validated");
      console.warn("❌ Formulario inválido - envío bloqueado");
    } else {
      // ✅ Todo válido → deja que se envíe normalmente
      form.classList.add("was-validated");
      console.info("✅ Formulario válido - envío permitido");
    }
  }, false);

  // Validación inicial para los datos precargados
  validarNombre();
  validarApellido();
  validarRut();
  validarEmail();
  validarFecha();
  validarDireccion();
});