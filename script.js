const apiKey = "2013d2ca36b9dd9275f79651ffa6a683";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
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
// input link
const searchBox    = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");



//-----------------------------------------------------------------------------------------
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); 
    var data       = await response.json();


    console.log(data); // View console for better picture of data

    /*
    Temperature:
    - DC ~ round to one degree
    */
    document.querySelector(".city").innerHTML     = data.name;
    document.querySelector(".temp").innerHTML     = (Math.round(data.main.temp * 10 / 10)).toFixed(1)  + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity   + "%";
    document.querySelector(".wind").innerHTML     = data.wind.speed + "km/h";

    
}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})







