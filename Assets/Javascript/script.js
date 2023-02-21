function searchCity(){
    const nameOfCity = document.getElementById("cityInput");
}


$(".btn").on("click", searchCity)

var weatherApi= "e0f2d656b846c3e3e712051ac66d9715"
var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weatherApi + "&units=" + "imperial"
fetch(queryURL).then(res => {
    return res.json()
})