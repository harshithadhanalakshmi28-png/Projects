async function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weather").innerHTML =
            "<p>Please enter a city name.</p>";
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
            "&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );

        let weatherData = await weatherResponse.json();

        document.getElementById("weather").innerHTML =
            "<h2>" + cityName + "</h2>" +
            "<p>Temperature: " +
            weatherData.current.temperature_2m + " °C</p>" +
            "<p>Humidity: " +
            weatherData.current.relative_humidity_2m + " %</p>" +
            "<p>Wind Speed: " +
            weatherData.current.wind_speed_10m + " km/h</p>";

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "<p>Unable to get weather data.</p>";

    }
}