const menuBtn = document.getElementById("menu-btn");    
const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
   menuBtn.classList.toggle("active");
     menuBtn.textContent = sidebar.classList.contains("open") ? "✕" : "☰";
});

sidebar.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

const links = document.querySelectorAll("#sidebar a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


/* ==== CARTA / ANIMACIÓN ==== */

const cartaTexto =
`Gracias por permitirme compartir contigo un año como pareja
lleno de muchos momentos buenos y malos, repleto de muchisimas emociones y 
con muchas sorpresas. Deseo con todo mi corazón seguir compartiendo mi vida contigo, porque eres la persona
que más amo en este universo y en todos los que existan. Me siento muy afortunado al poderte tener como mi novia, siempre contigo.
Corazon de melon ❤️`;

let i = 0;
const speed = 40; // velocidad de tipeo
function typeLove() {
  if (i < cartaTexto.length) {
    document.getElementById("love-text").textContent += cartaTexto.charAt(i);
    i++;
    setTimeout(typeLove, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeLove();
});