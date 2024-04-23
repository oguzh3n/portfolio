const editBtn = document.getElementById('editBio');
const area = document.getElementById('area');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const close = document.getElementById('close');

menu.addEventListener('click', function() {
  close.classList.remove('hidden');
  menu.classList.add('hidden');
  menu2.classList.remove('opacity-0');
  menu2.classList.add('opacity-100');
  menu2.classList.add('z-10');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menu2.contains(event.target)) {
    menu2.classList.remove('opacity-100');
    menu2.classList.add('opacity-0');
    menu2.classList.remove('z-10');
    close.classList.add('hidden');
    menu.classList.remove('hidden');
  }
});

document.addEventListener("scroll", function() {
  var navbar = document.querySelector("nav");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-black/20");
  } else {
    navbar.classList.remove("bg-black/20");
    navbar.classList.add("bg-transparent");
  }
});