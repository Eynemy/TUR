// Pobieramy nasz przycisk hamburgera i menu boczne
const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('#side-menu');
const menuContent = document.querySelector('.menu-content');
const overlay_menu = document.querySelector('.overlay_menu'); // Zmieniamy nazwę z 'overlay' na 'overlay_menu'

// Dodajemy klasę 'closed' do naszego menu bocznego
sideNav.classList.add('closed');

hamburger.addEventListener('click', () => {
    // Sprawdzamy, czy menu boczne jest otwarte czy zamknięte
    if (sideNav.classList.contains('open')) {
        // Jeśli jest otwarte, zamykamy je
        sideNav.classList.remove('open');
        sideNav.classList.add('closed');
    } else {
        // Jeśli jest zamknięte, otwieramy je
        sideNav.classList.remove('closed');
        sideNav.classList.add('open');
    }
});

// Dodajemy zdarzenie kliknięcia do przyciemnionej części strony, które zamyka menu, jeśli jest otwarte
overlay_menu.addEventListener('click', () => { // Zmieniamy z 'document' na 'overlay_menu'
    if (sideNav.classList.contains('open')) {
        sideNav.classList.remove('open');
        sideNav.classList.add('closed');
    }
});