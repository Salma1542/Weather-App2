// 
const apiKey = "11283e6d79800b42620ee42d65f38299";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const errormsg = document.querySelector('.error');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        errormsg.style.display = 'block'; 
        document.querySelector('.weather').style.display = 'none'; 

    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "./images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "./images/clear.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = "./images/snow.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "./images/mist.png";
        }

        // Show weather info and hide error message
        errormsg.style.display = 'none';
        document.querySelector('.weather').style.display = 'block';

    }
}

// Trigger weather check on button click
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
