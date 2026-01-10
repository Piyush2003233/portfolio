const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const darkBtn = document.getElementById("darkMode");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navItems.forEach(item=>{
  item.addEventListener("click", ()=>{
    navLinks.classList.remove("show");
  });
});

darkBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    darkBtn.textContent = "☀️";
  }else{
    darkBtn.textContent = "🌙";
  }
});