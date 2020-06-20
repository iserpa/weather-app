let temperatureInfo = document.querySelector(".temperature-info");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let icon = document.querySelector(".icon");
let kelvinToCelcius = 273.15;
let temperatureSection = document.querySelector(".temperature");
const temperatureSpan = document.querySelector(".temperature span")

function apiTest(){
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ce8a51b5bf841a3da28227f2af166fb`
  console.log(api);

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      console.log(data);
      const {description, icon} = data.weather[0];
      const {temp} = data.main;
      const {name} = data.name;

      //Set DOM Elements from the API
      temperatureDegree.textContent = (temp - kelvinToCelcius).toFixed(1);
      temperatureInfo.textContent = description.toUpperCase();
      locationTimezone.textContent = city.toUpperCase();
      icon.textContent = icon;
      console.log(icon);

      //Set Icons
      if(icon === "01d"){
        document.getElementById("wicon").src = "icons/day.svg"
      }
      if(icon === "01n"){
        document.getElementById("wicon").src = "icons/night.svg"
      }
      if(icon === "02d"){
        document.getElementById("wicon").src = "icons/cloudy-day-1.svg"
      }
      if(icon === "02n"){
        document.getElementById("wicon").src = "icons/cloudy-night-1.svg"
      }
      if(icon === "03d"){
        document.getElementById("wicon").src = "icons/cloudy-day-3.svg"
      }
      if(icon === "03n"){
        document.getElementById("wicon").src = "icons/cloudy-night-3.svg"
      }
      if(icon === "04d" || icon === "04n" || icon === "50d" || icon === "50n"){
        document.getElementById("wicon").src = "icons/cloudy.svg"
      }
      if(icon === "09d"){
        document.getElementById("wicon").src = "icons/rainy-1.svg"
      }
      if(icon === "09n"){
        document.getElementById("wicon").src = "icons/rainy-4.svg"
      }
      if(icon === "10d" || icon === "10n"){
        document.getElementById("wicon").src = "icons/rainy-5.svg"
      }
      if(icon === "11d" || icon === "11n"){
        document.getElementById("wicon").src = "icons/thunder.svg"
      }
      if(icon === "13d" || icon === "13n"){
        document.getElementById("wicon").src = "icons/snowy-6.svg"
      }
    })
}
apiTest();