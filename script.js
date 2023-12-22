const apiKey      = "2013d2ca36b9dd9275f79651ffa6a683";
const apiURL      = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
/* ~ DC ~ ☆☆☆
    - apiURL call blueprint = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      NOTICE: after 'weateher?' we just attach different elements combined with '&'
              to create the search which is search by city in this case. 
              The elements we include in this case are: 
              - q={city name}
              - appid={API Key}
              - units=metric
*/
//----------------------------------------------------
// ~ DC ~ Find out more about querySelector
const searchBox    = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


//-----------------------------------------------------------------------------------------
async function checkWeather(city){                                    // ⍟ 
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // ⍟
    var data       = await response.json();                           // ⍟


    console.log(data); // View console for better picture of data 

    if(response.status == 404){ // If ERROR/404 from api URL data fetch
        document.querySelector(".error").style.display   = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else{
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy1.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain_cloud2.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle1.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/rain_cloud2.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow1.png";
        }
        else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "images/wind1.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display   = "none";
    }



    /*
    Temperature:
    - DC ~ round to one degree
    */
    document.querySelector(".city").innerHTML     = data.name;
    document.querySelector(".temp").innerHTML     = (Math.round(data.main.temp * 10 / 10)).toFixed(1)  + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity   + "%";
    document.querySelector(".wind").innerHTML     = data.wind.speed + "km/h";

    // Update weather icon image based on API return data

    
}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})







