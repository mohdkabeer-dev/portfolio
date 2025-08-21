
// ----------------------- For switching Themes ---------------------

const btn = document.querySelectorAll('.theme-btn');

const icon = document.getElementById('theme-icon');

const socketColor = document.getElementById('socket')

const theme = document.body.classList;


// Apply saved theme & filter
const savedFilter = localStorage.getItem('socket-filter')
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  theme.remove('light', 'dark');
  theme.add(savedTheme);
  updateIcon(savedTheme);
}
if (savedFilter) {
socketColor.style.filter = savedFilter
}

btn.forEach((btns) => {
  btns.addEventListener('click', () => {
    if (theme.contains('light')) {
      theme.remove('light');
      theme.add('dark');
      localStorage.setItem('theme', 'dark');
      updateIcon('dark');
      socketColor.style.filter = 'invert(100%)'
      localStorage.setItem('socket-filter', 'invert(100%)')

    } else {
      theme.remove('dark');
      theme.add('light');
      localStorage.setItem('theme', 'light');
      updateIcon('light');
      socketColor.style.filter = 'invert(0%)'
      localStorage.setItem('socket-filter', 'invert(0%)')

    }
  });
})

function updateIcon(currentTheme) {
  if (currentTheme === 'dark') {
    icon.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
  } else {
    icon.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
  }
}


// -------------  For Mobile-Nav Display Only (using Menu Button)  -------------------

const menu = document.getElementById('menu-bar')
const nav = document.getElementById('mobNav')
const Theme = document.querySelector('.theme')



menu.addEventListener('click', (e) => {
  e.stopPropagation()
  if (nav.style.display === 'none') {

    nav.style.display = 'block'
    Theme.style.display = 'block'
  }
  else {
    nav.style.display = 'none'
    Theme.style.display = 'none'
  }
})


// -----------  For closing Mobile-Nav( when clicking anywhere on screen)  ----------------

document.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    Theme.style.display = 'none'
    nav.style.display = 'none'
  }
})





