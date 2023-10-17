    document.addEventListener("DOMContentLoaded", function () {
    // This function is executed when the DOMContentLoaded event is triggered,
    // meaning the HTML document has fully loaded and is ready for JavaScript.
    // Define your OpenWeatherMap API key. Replace 'YOUR_OPENWEATHERMAP_API_KEY'
    // with your actual API key.
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    // Get references to HTML elements you will interact with.
    const weatherInfo = document.getElementById("weather-info");
    const getWeatherButton = document.getElementById("get-weather");
    // Add an event listener to the "Get Weather" button, which triggers a function
    // when the button is clicked.
    getWeatherButton.addEventListener("click", function () {
        // Retrieve the value entered in the "city" input field.
        const city = document.getElementById("city").value;
        if (city) {
        // If a city name is provided, make a request to the OpenWeatherMap API.
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((response) => response.json()) // Parse the API response as JSON.
            .then((data) => {
            // Extract temperature, description, and city name from the API response.
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;
            // Update the "weatherInfo" element with the weather information.
            weatherInfo.innerHTML = `Temperature in ${cityName}: ${temperature}°C, ${description}`;
            })
            .catch((error) => {
            // Handle errors if the city is not found or there's a network issue.
            weatherInfo.innerHTML = "City not found. Please try again.";
            });
        } else {
        // If no city name is provided, display a message to the user.
        weatherInfo.innerHTML = "Please enter a city name.";
        }
    });
    });
