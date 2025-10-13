
const nav = document.getElementById('navBar');
const divLogo = document.getElementById('logoDiv');

if (!nav || !divLogo) {
  throw new Error('Element with id "navBar" or "logoDiv" not found');
}

const p = document.createElement('p');
p.textContent = "S&J Parillada y Catering service";
p.classList.add('text-white', 'font-bold', 'text-lg', 'ml-2', 'font-kalam');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
    nav.classList.remove('nav-default');
    if (!divLogo.contains(p)) {
      divLogo.appendChild(p);
    }
  } else {
    nav.classList.add('nav-default');
    nav.classList.remove('nav-scrolled');
    if (divLogo.contains(p)) {
      divLogo.removeChild(p);
    }
  }
});