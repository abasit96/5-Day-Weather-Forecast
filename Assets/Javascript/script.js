$(document).ready(function () {
    $("#search").click(function () {
        const city = $("#cityInput").val();
        var weatherApi = "e0f2d656b846c3e3e712051ac66d9715"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApi + "&units=imperial";
        fetch(queryURL).then(response => {
            return response.json();
        })
        })
        .then(data => {
            
            var date = new Date();
            var cityName = data.name;
            var currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            var weatherIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            var weatherIconHTML = '<img src="'+ weatherIcon +'">';
            $("#cityName").html( cityName + ' ('+ currentDate +')' + weatherIconHTML );
            var temp = data.main.temp
            document.getElementById("temp").textContent = "Temp: " + temp + " °F"
            var wind = data.wind.speed
            document.getElementById('wind').textContent = "Wind: " + wind + " mph"
            var humidity = data.main.humidity
            document.getElementById('humidity').textContent = "Humidity: " + humidity + " %"
            // weather.removeClass("weather");
            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + weatherApi + "&units=imperial";

            return fetch(fiveDay).then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                var baseDay = dayjs().format('D')
                var startDay = Number(baseDay);

                var dayOne = $("#date-1");
                var iconOne = $("#emoji-1");
                var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"

                var tempOne = $("#current-temp-1");
                var windOne = $("#wind-1");
                var humidityOne = $("#humidity-1");

                var dayOneBase = startDay
                dayOne.text(dayjs().format('M/' + dayOneBase + '/YYYY'));
                iconOne.text("")
                iconOne.append('<img src=' + iconOneSrc + '>')
                tempOne.text(data.list[3].main.temp + "°F")
                windOne.text(data.list[3].wind.speed + " mph")
                humidityOne.text(data.list[3].main.humidity + "%")

                var dayTwo = $("#date-2");
                var iconTwo = $("#emoji-2");
                var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + ".png"
                var tempTwo = $("#current-temp-2");
                var windTwo = $("#wind-2");
                var humidityTwo = $("#humidity-2");

                var dayTwoBase = dayOneBase + 1
                dayTwo.text(dayjs().format('M/' + dayTwoBase + '/YYYY'));
                iconTwo.text("")
                iconTwo.append('<img src=' + iconTwoSrc + '>')
                tempTwo.text(data.list[11].main.temp + "°F")
                windTwo.text(data.list[11].wind.speed + " mph")
                humidityTwo.text(data.list[11].main.humidity + "%")

                var dayThree = $("#date-3");
                var iconThree = $("#emoji-3");
                var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + ".png"
                var tempThree = $("#current-temp-3");
                var windThree = $("#wind-3");
                var humidityThree = $("#humidity-3");

                var dayThreeBase = dayTwoBase + 1
                dayThree.text(dayjs().format('M/' + dayThreeBase + '/YYYY'));
                iconThree.text("")
                iconThree.append('<img src=' + iconThreeSrc + '>')
                tempThree.text(data.list[19].main.temp + "°F")
                windThree.text(data.list[19].wind.speed + " mph")
                humidityThree.text(data.list[19].main.humidity + "%")

                var dayFour = $("#date-4");
                var iconFour = $("#emoji-4");
                var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + ".png"
                var tempFour = $("#current-temp-4");
                var windFour = $("#wind-4");
                var humidityFour = $("#humidity-4");

                var dayFourBase = dayThreeBase + 1
                dayFour.text(dayjs().format('M/' + dayFourBase + '/YYYY'));
                iconFour.text("")
                iconFour.append('<img src=' + iconFourSrc + '>')
                tempFour.text(data.list[27].main.temp + "°F")
                windFour.text(data.list[27].wind.speed + " mph")
                humidityFour.text(data.list[27].main.humidity + "%")

                var dayFive = $("#date-5");
                var iconFive = $("#emoji-5");
                var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"
                var tempFive = $("#current-temp-5");
                var windFive = $("#wind-5");
                var humidityFive = $("#humidity-5");

                var dayFiveBase = dayFourBase + 1
                dayFive.text(dayjs().format('M/' + dayFiveBase + '/YYYY'));
                iconFive.text("")
                iconFive.append('<img src=' + iconFiveSrc + '>')
                tempFive.text(data.list[35].main.temp + "°F")
                windFive.text(data.list[35].wind.speed + " mph")
                humidityFive.text(data.list[35].main.humidity + "%")



            })

        })
        .catch(
            error => console.log('ERROR')
        )




// function saveCity() {

//     searchHistory.push($("input").val())
//     localStorage.setItem("travel", JSON.stringify(searchHistory))
// }

// function historySearch() {
//     console.log(this.dataset.city)
//     showNews(this.dataset.city)
//     getWeather(this.dataset.city)
//     clickDisplay();
// }

// function renderHistory() {
//     var favorites = $(".favorites");
//     var modifiedHistory = [...new Set(searchHistory)]
//     favorites.text("")
//     for (i = 0; i < searchHistory.length; i++) {
//         var recentSearch = document.createElement('button');
//         recentSearch.classList.add('fav-btn')
//         recentSearch.setAttribute('data-city', modifiedHistory[i])



//         recentSearch.addEventListener("click", historySearch)

//         if (recentSearch.textContent = modifiedHistory[i]) {
//             favorites.append(recentSearch);
//             recentSearch.addEventListener("click", historySearch)
//         }
//     }
// }

// renderHistory();