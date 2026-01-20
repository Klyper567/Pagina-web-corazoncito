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
