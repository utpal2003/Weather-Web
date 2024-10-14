const APIKEY = "API KEY";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname = document.querySelector(".city");
const Tempature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const searchBox = document.querySelector(".searc-box input");
const searchButton = document.querySelector(".searc-box button");
const weather_img = document.querySelector(".weather-img");
const Error_msg = document.querySelector(".error");
const blockweatherOption = document.querySelector(".weather");



 
async function checkweather(city) {
    const response = await fetch(APIURL + city +`&appid=${APIKEY}`);
    let data = await response.json();

    if(response.status ==404){
        Error_msg.style.display = "block";
        blockweatherOption.style.display = "none";
    }
    
    console.log(data)

    cityname.innerHTML = data.name;
    Tempature.innerHTML =Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weather_img.src = "./sunny_cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_img.src = "./sunny.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_img.src = "./rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_img.src = "./8841370.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather_img.src = "./sunny.png";
    }
    else if(data.weather[0].main == "Haze"){
        weather_img.src = "./3445718.png";
    }
    else{
        weather_img.src = "./sunny_cloud.png"
    }
    blockweatherOption.style.display = "block";
    Error_msg.style.display = "none";
}
 
searchButton.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkweather(city);
    } else {
        alert("Please enter a city name first.");
    }
});
// searchBox.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {  
//         searchButton.click();
//     }
// });








