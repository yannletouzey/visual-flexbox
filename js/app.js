const displayFlexBtn = document.getElementById("display-flex-btn");
const flexDirRowBtn = document.getElementById("flex-dir-row-btn");
const flexDirRowReverseBtn = document.getElementById("flex-dir-row-reverse-btn");
const flexDirColBtn = document.getElementById("flex-dir-col-btn");
const flexDirColReverseBtn = document.getElementById("flex-dir-col-reverse-btn");
const justifyStartBtn = document.getElementById("justify-start-btn");
const justifyCenterBtn = document.getElementById("justify-center-btn");
const justifyEndBtn = document.getElementById("justify-end-btn");
const justifySpaceAroundBtn = document.getElementById("justify-space-around-btn");
const justifySpaceBetweenBtn = document.getElementById("justify-space-between-btn");
const justifySpaceEvenlyBtn = document.getElementById("justify-space-evenly-btn");

const boxBig = document.getElementById("box-big");
const msg = document.getElementById("message");

//Voir si c'est pas mieux de grisé les boutons qui ne doivent pas etre activés et rendre inutilisable
displayFlexBtn.addEventListener("click", () => {
  boxBig.classList.toggle("display-flex-active");
  if (boxBig.classList.contains("display-flex-active")) {
    msg.textContent = "Display flex => Les boxs se placeront en ligne. C'est le comportement par défaut.";
  } else {
    msg.textContent = "Clique sur le bouton pour activer flexbox";
  }
  flexDirRowBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("flex-dir-row-active")) {
    boxBig.classList.remove("flex-dir-row-active");
  }
  flexDirRowReverseBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("flex-dir-row-reverse-active")) {
    boxBig.classList.remove("flex-dir-row-reverse-active");
  }
  flexDirColBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("flex-dir-col-active")) {
    boxBig.classList.remove("flex-dir-col-active");
  }
  flexDirColReverseBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("flex-dir-col-reverse-active")) {
    boxBig.classList.remove("flex-dir-col-reverse-active");
  }
  justifyStartBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  justifyCenterBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  justifyEndBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  justifySpaceAroundBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-space-around-active")) {
    boxBig.classList.remove("justify-space-around-active");
  }
  justifySpaceBetweenBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  justifySpaceEvenlyBtn.classList.toggle("btn-hide");
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
});

flexDirRowBtn.addEventListener("click", () => {
  boxBig.classList.toggle("flex-dir-row-active");
  if (boxBig.classList.contains("flex-dir-row-active")) {
    boxBig.classList.remove("flex-dir-row-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-col-reverse-active")) {
    boxBig.classList.remove("flex-dir-col-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-col-active")) {
    boxBig.classList.remove("flex-dir-col-active");
  }
  if (boxBig.classList.contains("flex-dir-row-active")) {
    msg.textContent = "Display flex + flex direction row => Les boxs se placeront en ligne.";
  } else {
    msg.textContent = "Display flex";
  }
});
flexDirRowReverseBtn.addEventListener("click", () => {
  boxBig.classList.toggle("flex-dir-row-reverse-active");
  if (boxBig.classList.contains("flex-dir-row-active")) {
    boxBig.classList.remove("flex-dir-row-active");
  }
  if (boxBig.classList.contains("flex-dir-col-reverse-active")) {
    boxBig.classList.remove("flex-dir-col-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-col-active")) {
    boxBig.classList.remove("flex-dir-col-active");
  }
  if (boxBig.classList.contains("flex-dir-row-reverse-active")) {
    msg.textContent = "Display flex + flex direction row reverse => Les boxs se placeront en ligne mais l'ordre de celles-ci sera inversés.";
  } else {
    msg.textContent = "Display flex";
  }
});
flexDirColBtn.addEventListener("click", () => {
  boxBig.classList.toggle("flex-dir-col-active");
  if (boxBig.classList.contains("flex-dir-col-active")) {
    boxBig.classList.remove("flex-dir-col-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-row-reverse-active")) {
    boxBig.classList.remove("flex-dir-row-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-row-active")) {
    boxBig.classList.remove("flex-dir-row-active");
  }
  if (boxBig.classList.contains("flex-dir-col-active")) {
    msg.textContent = "Display flex + flex direction column => Les boxs se placeront en colonne.";
  } else {
    msg.textContent = "Display flex";
  }
});
flexDirColReverseBtn.addEventListener("click", () => {
  boxBig.classList.toggle("flex-dir-col-reverse-active");
  if (boxBig.classList.contains("flex-dir-col-active")) {
    boxBig.classList.remove("flex-dir-col-active");
  }
  if (boxBig.classList.contains("flex-dir-row-reverse-active")) {
    boxBig.classList.remove("flex-dir-row-reverse-active");
  }
  if (boxBig.classList.contains("flex-dir-row-active")) {
    boxBig.classList.remove("flex-dir-row-active");
  }
  if (boxBig.classList.contains("flex-dir-col-reverse-active")) {
    msg.textContent = "Display flex + flex direction column reverse => Les boxs se placeront en colonne mais l'ordre de celles-ci sera inversés.";
  } else {
    msg.textContent = "Display flex";
  }
});

// Justify

  // Start
justifyStartBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-start-active");
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  if (boxBig.classList.contains("justify-space-around-active")) {
    boxBig.classList.remove("justify-space-around-active");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
  if (boxBig.classList.contains("justify-start-active")) {
    msg.textContent = "Display flex + justify start => Toutes les boxs seront répartit au début du containeur";
  } else {
    msg.textContent = "Display flex";
  }
});
  // Center
justifyCenterBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-center-active");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  if (boxBig.classList.contains("justify-space-around-btn")) {
    boxBig.classList.remove("justify-space-around-btn");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
  if (boxBig.classList.contains("justify-center-active")) {
    msg.textContent = "Display flex + justify center => Toutes les boxs seront répartit au centre du containeur";
  } else {
    msg.textContent = "Display flex";
  }
});
  // End
justifyEndBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-end-active");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  if (boxBig.classList.contains("justify-space-around-active")) {
    boxBig.classList.remove("justify-space-around-active");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    msg.textContent = "Display flex + justify end => Toutes les boxs seront répartit vers la fin du containeur";
  } else {
    msg.textContent = "Display flex";
  }
});
  // Space around
justifySpaceAroundBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-space-around-active");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
  if (boxBig.classList.contains("justify-space-around-active")) {
    msg.textContent = "Display flex + justify space around => Chaque box aura un espace egal. Contrairement au margin, les espaces ne fusionnent pas.";
  } else {
    msg.textContent = "Display flex";
  }
});
  // Space between
justifySpaceBetweenBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-space-between-active");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  if (boxBig.classList.contains("justify-space-around-active")) {
    boxBig.classList.remove("justify-space-around-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    boxBig.classList.remove("justify-space-evenly-active");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    msg.textContent = "Display flex + justify space between => Ajoute un espace entre chaque box. Les box des extremités seront plaquées de chaque cotés du containeur et l'espace restant sera répartit.";
  } else {
    msg.textContent = "Display flex";
  }
});
  // Space evenly
justifySpaceEvenlyBtn.addEventListener("click", () => {
  boxBig.classList.toggle("justify-space-evenly-active");
  if (boxBig.classList.contains("justify-start-active")) {
    boxBig.classList.remove("justify-start-active");
  }
  if (boxBig.classList.contains("justify-center-active")) {
    boxBig.classList.remove("justify-center-active");
  }
  if (boxBig.classList.contains("justify-end-active")) {
    boxBig.classList.remove("justify-end-active");
  }
  if (boxBig.classList.contains("justify-space-around-active")) {
    boxBig.classList.remove("justify-space-around-active");
  }
  if (boxBig.classList.contains("justify-space-between-active")) {
    boxBig.classList.remove("justify-space-between-active");
  }
  if (boxBig.classList.contains("justify-space-evenly-active")) {
    msg.textContent = "Display flex + justify space evenly => Ajoutera un espace egal entre chaque box.";
  } else {
    msg.textContent = "Display flex";
  }
});