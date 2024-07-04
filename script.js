function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // When touching outside while collapsed
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
      }
    }
  });
}