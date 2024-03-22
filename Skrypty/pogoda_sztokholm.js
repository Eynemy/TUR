fetch('https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,precipitation_sum')
.then(response => response.json())
.then(data => {
    let weatherContainer = document.getElementById('weather');
    for (let i = 0; i < 3; i++) {
        let weatherCard = document.createElement('div');
        var deszcz = data.daily.precipitation_sum[i];
        var poziom_deszczu = "/TUR/Obrazy/";
        if (deszcz < 15){
            // poziom_deszczu +='<b>Bardzo lekki deszcz</b>'
            poziom_deszczu +='bardzo lekki deszcz.png" title="bardzo lekki deszcz" '
        }
        else if(deszcz < 24){
            // poziom_deszczu +='<b>Lekki deszcz</b>'
            poziom_deszczu +='lekki deszcz.png" title="lekki deszcz" '
        }
        else if (deszcz < 96){
            // poziom_deszczu +='<b>Umiarkowany deszcz</b>'
            poziom_deszczu +='umiarkowany deszcz.png" title="umiarkowany deszcz" '
        }
        else if (deszcz < 288){
            // poziom_deszczu +='<b>Ulewa</b>'
            poziom_deszczu +='ulewny1.png" title="ulewa" '
        }
        else{
            // poziom_deszczu +='<b>Nawałnica</b>'
            poziom_deszczu +='nawałnica.png" title="nawałnica" '
        }
        
    
        var temp_min = data.daily.temperature_2m_min[i];
        var temp_max = data.daily.temperature_2m_max[i];
        var min_kolor = "color: ";
        var max_kolor = "color: ";
        if (temp_max > 0){
            max_kolor +="red";
        }
        else if (temp_max < 0){
        max_kolor +="blue";
        }
        if (temp_min > 0){
            min_kolor +='red';
        }
        else if(temp_min < 0){
            min_kolor +='blue';
        }
        var Dzien;
        if (i == 0){
            Dzien="Dzisiaj";
        }
        if(i == 1){
            Dzien="Jutro";
        }
        if(i == 2){
            Dzien="Pojutrze";
        }
        // <h3>Dzień ${i + 1}</h3>
        
        weatherCard.className = 'weather-card';
        weatherCard.innerHTML = `
            <h3>${Dzien}</h3>
            <img src="${poziom_deszczu} width="40px">
            <p>Temperatura max: <b style=" ${max_kolor};"> ${data.daily.temperature_2m_max[i]}°C</b></p>
            <p>Temperatura min: <b style=" ${min_kolor};"> ${data.daily.temperature_2m_min[i]}°C</b></p>
            <p>Opady: <b> ${data.daily.precipitation_sum[i]}mm</b></p>
        `;
        weatherContainer.appendChild(weatherCard);
    }
});

