const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

let indiceImagenVisible = 1;

setInterval(() => {
  if (indiceImagenVisible === 1) {
    imagen1.style.opacity = "0";
    imagen2.style.opacity = "1";
    indiceImagenVisible = 2;
  } else {
    imagen1.style.opacity = "1";
    imagen2.style.opacity = "0";
    indiceImagenVisible = 1;
  }
}, 3000);
