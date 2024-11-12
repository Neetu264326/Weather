const inputbox = document.querySelector('.inputbox');
const searchbtn = document.querySelector('#searchbtn');
const weather_imag = document.querySelector('.weather-imag');
const temperature = document.querySelector('.temperature');
const Description = document.querySelector('.Description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');

async function checkWeather(city) {
    const apikey = '77d92cb3e0da9e0a9742f126d54ffc5c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    try {
        const weather_data = await fetch(url).then(response => response.json());
        console.log(weather_data);

        // Update the weather data on the page
        temperature.textContent = `${Math.round(weather_data.main.temp - 273.15)}°C`; 
        Description.textContent = weather_data.weather[0].description;
        humidity.textContent = `Humidity: ${weather_data.main.humidity}%`;
        wind_speed.textContent = `Wind: ${weather_data.wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
// temperature.innerHTML='${weather_data.main.temp}'; 

searchbtn.addEventListener('click', () => {
    const city = inputbox.value;
    checkWeather(city);
});
