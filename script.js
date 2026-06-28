const apiKey = "630087400dc7945247a8f6232653d344";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("error").textContent = "Please enter a city";
        return;
    }

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod != 200) {
            document.getElementById("error").textContent = data.message;
            return;
        }

        document.getElementById("error").textContent = "";
        document.getElementById("city").textContent = data.name + ", " + data.sys.country;
        document.getElementById("temperature").textContent = "Temperature: " + data.main.temp + " °C";
        document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").textContent = "Wind Speed: " + data.wind.speed + " m/s";
        document.getElementById("condition").textContent = "Condition: " + data.weather[0].description;

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    }
}