// fetch('https://api.nbp.pl/api/exchangerates/rates/A/SEK/')
// .then(response => response.json())
// .then(data => {
//     document.getElementById('SEK_kurs').textContent = data.rates[0].mid;
// });

let rate;

fetch('https://api.nbp.pl/api/exchangerates/rates/A/SEK/')
    .then(response => response.json())
    .then(data => {
        rate = data.rates[0].mid;
        document.getElementById('SEK_kurs').textContent = rate;
    });

function convertPLN_to_SEK() {
    let pln = document.getElementById('pln_to_sek').value;
    let sek = pln * rate;
    document.getElementById('sek_wynik').textContent = sek.toFixed(2) + ' PLN';
}

function convertSEK_to_PLN() {//  jest na odwrot to liczy ile korone bedziesz miec za dana kwote w pln
    let sek = document.getElementById('sekt_to_pl').value;
    let pln = sek / rate;
    document.getElementById('sek_pln_wynik').textContent = pln.toFixed(2) + ' SEK'; 
}