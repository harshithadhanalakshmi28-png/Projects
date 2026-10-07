async function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weather").innerHTML =
            "<p>Please enter a city name.</p>";
        document.getElementById("travel").innerHTML = "";
        return;
    }

    try {

        let locationResponse = await fetch(
            "https://geocoding-api.open-meteo.com/v1/search?name=" +
            encodeURIComponent(city) +
            "&count=1&language=en&format=json"
        );

        let locationData = await locationResponse.json();

        if (!locationData.results) {
            document.getElementById("weather").innerHTML =
                "<p>City not found. Please enter a valid city.</p>";
            document.getElementById("travel").innerHTML = "";
            return;
        }

        let latitude = locationData.results[0].latitude;
        let longitude = locationData.results[0].longitude;
        let cityName = locationData.results[0].name;

        let weatherResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code"
        );

        let weatherData = await weatherResponse.json();

        let temperature = weatherData.current.temperature_2m;
        let humidity = weatherData.current.relative_humidity_2m;
        let wind = weatherData.current.wind_speed_10m;
        let weatherCode = weatherData.current.weather_code;

        let icon = "☀️";
        let condition = "Clear";

        if (weatherCode >= 1 && weatherCode <= 3) {
            icon = "⛅";
            condition = "Partly Cloudy";
        } else if (weatherCode >= 51 && weatherCode <= 67) {
            icon = "🌧️";
            condition = "Rainy";
        } else if (weatherCode >= 71 && weatherCode <= 77) {
            icon = "❄️";
            condition = "Snowy";
        } else if (weatherCode >= 80 && weatherCode <= 82) {
            icon = "🌦️";
            condition = "Rain Showers";
        } else if (weatherCode >= 95) {
            icon = "⛈️";
            condition = "Thunderstorm";
        }

        document.getElementById("weather").innerHTML =
            "<h2>" + cityName + "</h2>" +
            "<div class='weather-icon'>" + icon + "</div>" +
            "<h3>" + condition + "</h3>" +
            "<p>Temperature: " + temperature + " °C</p>" +
            "<p>Humidity: " + humidity + " %</p>" +
            "<p>Wind Speed: " + wind + " km/h</p>";

        showTravelSuggestion(cityName, temperature, weatherCode);

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "<p>Unable to get weather data.</p>";

        document.getElementById("travel").innerHTML = "";
    }
}

function showTravelSuggestion(cityName, temperature, weatherCode) {

    let suggestion;

    if (cityName.toLowerCase().includes("chennai")) {
        suggestion = "🏖️ Chennai: Visit Marina Beach, explore the city and enjoy the coastal atmosphere.";
    } else if (cityName.toLowerCase().includes("coimbatore")) {
        suggestion = "🌿 Coimbatore: Enjoy the pleasant climate and visit nearby waterfalls and hill areas.";
    } else if (cityName.toLowerCase().includes("madurai")) {
        suggestion = "🛕 Madurai: Visit Meenakshi Amman Temple and explore the city's historical places.";
    } else if (cityName.toLowerCase().includes("ooty")) {
        suggestion = "🏔️ Ooty: Enjoy the cool weather, tea gardens and beautiful hill scenery.";
    } else if (cityName.toLowerCase().includes("kanyakumari")) {
        suggestion = "🌊 Kanyakumari: Visit the beaches and enjoy the beautiful sunrise and sunset.";
    } else {
        suggestion = "🗺️ Explore the local attractions, try local food and enjoy the unique culture of " + cityName + ".";
    }

    if (weatherCode >= 51 && weatherCode <= 82) {
        suggestion += " 🌧️ Since rain is expected, carry an umbrella.";
    } else if (temperature > 30) {
        suggestion += " ☀️ Since it is hot, carry water and avoid strong afternoon sunlight.";
    }

    document.getElementById("travel").innerHTML =
        "<h2>Travel Suggestion</h2>" +
        "<p>" + suggestion + "</p>";
}

    