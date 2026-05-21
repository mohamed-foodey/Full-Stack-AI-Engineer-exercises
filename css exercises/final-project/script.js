document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("menu");
  const icon = document.getElementById("menuIcon");

  icon.addEventListener("click", function () {
    menu.classList.toggle("active");

    icon.textContent = menu.classList.contains("active")
      ? "✖"
      : "☰";
  });

  // Marka link la click-gareeyo menu ha xirmo
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      icon.textContent = "☰";
    });
  });

});
