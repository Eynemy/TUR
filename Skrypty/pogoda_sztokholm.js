fetch('https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,precipitation_sum')
.then(response => response.json())
.then(data => {
    let weatherContainer = document.getElementById('weather');
    for (let i = 0; i < 3; i++) {
        let weatherCard = document.createElement('div');
        weatherCard.className = 'weather-card';
        weatherCard.innerHTML = `
            <h3>Dzień ${i + 1}</h3>
            <p>Temperatura maksymalna: <b> ${data.daily.temperature_2m_max[i]}°C</b></p>
            <p>Temperatura minimalna: <b> ${data.daily.temperature_2m_min[i]}°C</b></p>
            <p>Opady: <b> ${data.daily.precipitation_sum[i]}mm</b></p>
        `;
        weatherContainer.appendChild(weatherCard);
    }
});