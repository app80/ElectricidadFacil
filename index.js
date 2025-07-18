window.addEventListener("load", function () {
  document.getElementById("movil-menu").hidden = true;
});

// Esperar a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-button");
});

hamburguesa.addEventListener("click", function () {
  var Visible = document.getElementById("movil-menu").hidden;
  var intro = document.getElementById("movil-menu");

  if (Visible == true) {
    document.getElementById("movil-menu").hidden = false;
    intro.className = "movil-menu";
  } else {
    document.getElementById("movil-menu").hidden = true;
    intro.className = "menu-oculto";
  }
});
