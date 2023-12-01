import "./styles/styles.css";

import { layoutLogo } from "./modules/imagesImport";

const logoImage = document.querySelector(".logo-box");

function displayLogo(el) {
  el.innerHTML = `
  <img src = ${layoutLogo} alt ="Logo image" class = "logo-img"/> 
  `;
}

displayLogo(logoImage);
