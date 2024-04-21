const apiKey = "cf7ae197cd3b9bb784f6b11cc2a08738";
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherData = document.getElementById("weatherData");
const spinner = document.querySelector(".loader");
const suggestionContainer = document.getElementById("suggestions");

cityInput.addEventListener("input", () => {
    const input = cityInput.value.trim();
    if (input.length >= 3) {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const suggestions = data.map(city => `<li><a href="#">${city.name}, ${city.country}</a></li>`).join("");
                    suggestionContainer.innerHTML = suggestions;
                    suggestionContainer.style.display = "block";
                } else {
                    suggestionContainer.innerHTML = "";
                    suggestionContainer.style.display = "none";
                }
            })
            .catch(error => {
                console.error("Error al obtener sugerencias:", error);
                suggestionContainer.innerHTML = "";
                suggestionContainer.style.display = "none";
            });
    } else {
        suggestionContainer.innerHTML = "";
        suggestionContainer.style.display = "none";
    }
});

//! Realizar búsqueda cuando se hace clic en una sugerencia
suggestionContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const searchQuery = e.target.textContent;
        cityInput.value = searchQuery;
        fetchData();
        suggestionContainer.innerHTML = "";
        suggestionContainer.style.display = "none";
    }
});

//! Ocultar las sugerencias cuando se hace clic en otro lugar de la página
document.addEventListener("click", (e) => {
    if (!e.target.matches("#cityInput")) {
        suggestionContainer.innerHTML = "";
        suggestionContainer.style.display = "none";
    }
});

function showSpinner() {
    spinner.style.display = "block";
    setTimeout(() => {
        spinner.style.display = "none";
    }, 4000);
}

function clearWeatherData() {
    weatherData.innerHTML = "";
}

function clearimput() {
    cityInput.value = "";
}

searchButton.addEventListener("click", () => {
    fetchData();
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchData();
    }
});

function fetchData() {
    const cityName = cityInput.value.trim();

    if (cityName !== "") {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=sp`;
        
        clearWeatherData();
        showSpinner();
        clearimput();

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeatherData(data);
                } else {
                    weatherData.innerHTML = `<div class="error-city">
                    <p>No se encontraron datos para esa ciudad</p>
                    <img id="imagen-clima-estado" src="./img/error.gif">
                    </div>
                    `;
                }
            })
            .catch(error => {
                console.error("Error al obtener datos del clima:", error);
                weatherData.innerHTML = `<div class="error-city">
                <p>Ocurrió un error al obtener los datos del clima</p>
                <img id="imagen-clima-estado" src="./img/error.gif">
                </div>
                `;;
            })
            .finally(() => {
                spinner.style.display = "none"; //!Ocultar el spinner al finalizar
            });
    } else {
        weatherData.innerHTML = `<div class="error-city">
        <p>Por favor ingrese el nombre de una ciudad</p>
        <img id="imagen-clima-estado" src="./img/error.gif">
        </div>
        `;
    }
}

function displayWeatherData(data) {
    const weatherMain = data.weather[0].main;
    const icon = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;
    const cityName = data.name;
    const temperature = data.main.temp;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const feelsLike = data.main.feels_like;
    const visibility = data.visibility;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' });
    
    suggestionContainer.style.display = "none";
    weatherData.innerHTML = `
        <div class="city-Name">
            <h1 class="city">${cityName}</h1>
            <img src="./icons/fill/animation-ready/compass.svg">
        </div>
        <div class="clima">
        <img id="imagen-clima-estado" src="./img/Imagen estado del Clima/${icon}.svg">
        </div>

        <div class="weather-description container">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="clima">
            <h3 class="descripcion-clima">${weatherDescription}</h3>
        </div>

        <div class="min-max">
            <h3>Máxima ${maxTemp}°C</h3>
            <h3>Mínima ${minTemp}°C</h3>
        </div>
        <div class="temperature">
            <h2 class="tempt">${temperature}</h2>
            <h3 class="c">°C</h3>
        </div>
        <div class="weather-details container">
            <div class="humidity col">
                <div class="text">
                    <p class="Humedad detail-tittle">${humidity}%</p>
                    <p>Humedad</p>
                </div>
                <img class="weather-icons" src="./icons/fill/animation-ready/raindrops.svg">
            </div>
            <div class="wind col">
                <img class="weather-icons" src="./icons/fill/animation-ready/dust-wind.svg">
                <div class="text">
                    <p class="Viento detail-tittle">${windSpeed} Km/h</p>
                    <p>Viento</p>
                </div>
            </div>
        </div>
        <div class="weather-details container">
            <div class="feel-like col">
                <div class="text">
                    <p class="Humedad detail-tittle">${feelsLike}°C</p>
                    <p>Termica</p>
                </div>
                <img class="weather-icons" src="./icons/fill/animation-ready/thermometer-celsius.svg">
            </div>
            <div class="visibility col">
                <img class="weather-icons" src="./icons/fill/animation-ready/mist.svg">
                <div class="text">
                    <p class="Visibilidad detail-tittle">${visibility}m</p>
                    <p>Visibilidad</p>
                </div>
            </div>
        </div>
        <div class="weather-details sunrise-sunset container">
            <div class="sunrise col">
                <div class="text">
                    <p class="Humedad detail-tittle">${sunrise}</p>
                    <p>Amanecer</p>
                </div>
                <img class="weather-icons" src="./icons/fill/animation-ready/sunrise.svg">
            </div>
            <div class="sunset col">
                <img class="weather-icons" src="./icons/fill/animation-ready/moonrise.svg">
                <div class="text">
                    <p class="Visibilidad detail-tittle">${sunset}</p>
                    <p>Atardecer</p>
                </div>
            </div>
        </div>
    `;
}
