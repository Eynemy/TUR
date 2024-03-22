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

        let sek1 = 79;
        let wynik1 = sek1 *rate;
        document.getElementById('SEK1').innerHTML = wynik1.toFixed(2) + 'zł';
        let sek2 = 139;
        let wynik2 = sek2 * rate;
        document.getElementById('SEK2').innerHTML = wynik2.toFixed(2) + 'zł';
        let sek3 = 69;
        let wynik3 = sek3 * rate;
        document.getElementById('SEK3').innerHTML = wynik3.toFixed(2) + 'zł';
        let sek4 = 119;
        let wynik4 = sek4 * rate;
        document.getElementById('SEK4').innerHTML = wynik4.toFixed(2) + 'zł';
        let sek5 = 158;
        let wynik5 = sek5 * rate;
        document.getElementById('SEK5').innerHTML = wynik5.toFixed(2) + 'zł';
        let sek6 = 278;
        let wynik6 = sek6 * rate;
        document.getElementById('SEK6').innerHTML = wynik6.toFixed(2) + 'zł';
        let sek7 = 138;
        let wynik7 = sek7 * rate;
        document.getElementById('SEK7').innerHTML = wynik7.toFixed(2) + 'zł';
        let sek8 = 238;
        let wynik8 = sek8 * rate;
        document.getElementById('SEK8').innerHTML = wynik8.toFixed(2) + 'zł';
        let sek9 = 129;
        let wynik9 = sek9 * rate;
        document.getElementById('SEK9').innerHTML = wynik9.toFixed(2) + 'zł';
        let sek10 = 209;
        let wynik10 = sek10 * rate;
        document.getElementById('SEK10').innerHTML = wynik10.toFixed(2) + 'zł';
        let sek11 = 320;
        let wynik11 = sek11 * rate;
        document.getElementById('SEK11').innerHTML = wynik11.toFixed(2) + 'zł';
        let sek12 = 160;
        let wynik12 = sek12 * rate;
        document.getElementById('SEK12').innerHTML = wynik12.toFixed(2) + 'zł';
        let sek13 = 161;
        let wynik13 = sek13 * rate;
        document.getElementById('SEK13').innerHTML = wynik13.toFixed(2) + 'zł';
        let sek14 = 222;
        let wynik14 = sek14 * rate;
        document.getElementById('SEK14').innerHTML = wynik14.toFixed(2) + 'zł';
        let sek15 = 42;
        let wynik15 = sek15 * rate;
        document.getElementById('SEK15').innerHTML = wynik15.toFixed(2) + 'zł';
        let sek16 = 26;
        let wynik16 = sek16 * rate;
        document.getElementById('SEK16').innerHTML = wynik16.toFixed(2) + 'zł';
        let sek17 = 84;
        let wynik17 = sek17 * rate;
        document.getElementById('SEK17').innerHTML = wynik17.toFixed(2) + 'zł';
        // let sek18 = ;
        // let wynik18 = sek18 * rate;
        // document.getElementById('SEK18').innerHTML = wynik18.toFixed(2) + 'zł';
        // let sek19 = ;
        // let wynik19 = sek19 * rate;
        // document.getElementById('SEK19').innerHTML = wynik19.toFixed(2) + 'zł';
        // let sek20 = ;
        // let wynik20 = sek20 * rate;
        // document.getElementById('SEK20').innerHTML = wynik20.toFixed(2) + 'zł';
        // let sek21 = ;
        // let wynik21 = sek21 * rate;
        // document.getElementById('SEK21').innerHTML = wynik21.toFixed(2) + 'zł';
        // let sek22 = ;
        // let wynik22 = sek22 * rate;
        // document.getElementById('SEK22').innerHTML = wynik22.toFixed(2) + 'zł';
        // let sek23 = ;
        // let wynik23 = sek23 * rate;
        // document.getElementById('SEK23').innerHTML = wynik23.toFixed(2) + 'zł';
        // let sek24 = ;
        // let wynik24 = sek24 * rate;
        // document.getElementById('SEK24').innerHTML = wynik24.toFixed(2) + 'zł';
        // let sek25 = ;
        // let wynik25 = sek25 * rate;
        // document.getElementById('SEK25').innerHTML = wynik25.toFixed(2) + 'zł';
        // let sek26 = ;
        // let wynik26 = sek26 * rate;
        // document.getElementById('SEK26').innerHTML = wynik26.toFixed(2) + 'zł';
        // let sek27 = ;
        // let wynik27 = sek27 * rate;
        // document.getElementById('SEK27').innerHTML = wynik27.toFixed(2) + 'zł';
        // let sek28 = ;
        // let wynik28 = sek28 * rate;
        // document.getElementById('SEK28').innerHTML = wynik28.toFixed(2) + 'zł';
        // let sek29 = ;
        // let wynik29 = sek29 * rate;
        // document.getElementById('SEK29').innerHTML = wynik29.toFixed(2) + 'zł';
        
    });
    // 29 zmiennych

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


    