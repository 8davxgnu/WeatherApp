const apiKey = "2013d2ca36b9dd9275f79651ffa6a683";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`); 
    var data       = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML     = data.name;
    /*
    Temperature:
    - DC ~ round to one degree
    */
    document.querySelector(".temp").innerHTML     = (Math.round(data.main.temp * 10 / 10)).toFixed(1)  + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity   + "%";
    document.querySelector(".wind").innerHTML     = data.wind.speed + "km/h";

    
}
checkWeather();






