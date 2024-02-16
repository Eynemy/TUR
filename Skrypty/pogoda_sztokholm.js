fetch('https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,precipitation_sum')
.then(response => response.json())
.then(data => {
    let weatherContainer = document.getElementById('weather');
    for (let i = 0; i < 3; i++) {
        let weatherCard = document.createElement('div');
        var deszcz = data.daily.precipitation_sum[i];
        var poziom_deszczu = "Opady:";
        if (deszcz < 15){
            // poziom_deszczu +='<b>Bardzo lekki deszcz</b>'
            poziom_deszczu +='/TUR/Obrazy/bardzo lekki deszcz.png'
        }
        else if(deszcz < 24){
            // poziom_deszczu +='<b>Lekki deszcz</b>'
            poziom_deszczu +='/TUR/Obrazy/lekki deszcz.png'
        }
        else if (deszcz < 96){
            // poziom_deszczu +='<b>Umiarkowany deszcz</b>'
            poziom_deszczu +='/TUR/Obrazy/umiarkowany deszcz.png'
        }
        else if (deszcz < 288){
            // poziom_deszczu +='<b>Ulewa</b>'
            poziom_deszczu +='/TUR/Obrazy/ulewny1.png'
        }
        else{
            // poziom_deszczu +='<b>Nawałnica</b>'
            poziom_deszczu +='/TUR/Obrazy/nawałnica.png'
        }
        
        weatherCard.className = 'weather-card';
        weatherCard.innerHTML = `
            <h3>Dzień ${i + 1}</h3>
            <img src="${poziom_deszczu}">
            <p>Temperatura max: <b style="color: red;"> ${data.daily.temperature_2m_max[i]}°C</b></p>
            <p>Temperatura min: <b style="color: blue;"> ${data.daily.temperature_2m_min[i]}°C</b></p>
            <p>Opady: <b> ${data.daily.precipitation_sum[i]}mm</b></p>
        `;
        weatherContainer.appendChild(weatherCard);
    }
});

// fetch('https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,precipitation_sum')
// .then(response => response.json())
// .then(data => {
//     let weatherContainer = document.getElementById('weather');
//     for (let i = 0; i < 3; i++) {
//         let weatherCard = document.createElement('div');
//         weatherCard.className = 'weather-card';
//         let precipitation = data.daily.precipitation_sum[i];
//         let precipitationDescription = 'Opady: ';
//         if (precipitation < 7) {
//             precipitationDescription += '<b style="color: blue;">Lekki deszcz, ';
//         } else {
//             precipitationDescription += '<b style="color: red;">Ciężki deszcz, ';
//         }
//         precipitationDescription += `${precipitation}mm</b>`;
//         weatherCard.innerHTML = `
//             <h3>Dzień ${i + 1}</h3>
//             <p>Temperatura max: <b style="color: red;"> ${data.daily.temperature_2m_max[i]}°C</b></p>
//             <p>Temperatura min: <b style="color: blue;"> ${data.daily.temperature_2m_min[i]}°C</b></p>
//             <p>${precipitationDescription}</p>
//         `;
//         weatherContainer.appendChild(weatherCard);
//     }
// });
