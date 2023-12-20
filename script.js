const apiKey = "2013d2ca36b9dd9275f79651ffa6a683";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`); 
    var data       = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML     = data.name;
    /*
    Temperature:
    

    */
    document.querySelector(".temp").innerHTML     = Math.round(data.main.temp)  + "°C"; 
    document.querySelector(".humidity").innerHTML = main.humidity   + "%";
    document.querySelector(".wind").innerHTML     = data.wind.speed + "km/h";

}







