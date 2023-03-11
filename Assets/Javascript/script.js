let searchHistoryList = JSON.parse(localStorage.getItem("searchHistoryList")) || [];

$(document).ready(function () {

    $("#search").click(function () {
        const city = $("#cityInput").val();
        storeCityName(city);
        var weatherApi = "e0f2d656b846c3e3e712051ac66d9715"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherApi + "&units=imperial";
        fetch(queryURL).then(response => {
            return response.json();
        })
            .then(data => {

                var date = new Date();
                var cityName = data.name;
                var currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
                var weatherIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                var weatherIconHTML = '<img src="' + weatherIcon + '">';
                $("#cityName").html(cityName + ' (' + currentDate + ')' + weatherIconHTML);
                var temp = data.main.temp
                document.getElementById("temp").textContent = "Temp: " + temp + " °F"
                var wind = data.wind.speed
                document.getElementById('wind').textContent = "Wind: " + wind + " mph"
                var humidity = data.main.humidity
                document.getElementById('humidity').textContent = "Humidity: " + humidity + " %"
                var lat = (data.coord.lat);
                var lon = (data.coord.lon);
                var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + weatherApi + "&units=imperial";

                return fetch(fiveDay).then(response => {
                    return response.json();
                })
            })
            .then(data => {

                var dayOne = $("#date-1");
                var iconOne = $("#emoji-1");
                var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"

                var tempOne = $("#temp-1");
                var windOne = $("#wind-1");
                var humidityOne = $("#humidity-1");

                var dayOneBase = dayjs().format('M/DD/YYYY')
                dayOne.text(dayOneBase);
                iconOne.text("")
                iconOne.append('<img src=' + iconOneSrc + '>')
                tempOne.text(data.list[3].main.temp + "°F")
                windOne.text(data.list[3].wind.speed + " mph")
                humidityOne.text(data.list[3].main.humidity + "%")

                var dayTwo = $("#date-2");
                var iconTwo = $("#emoji-2");
                var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + ".png"
                var tempTwo = $("#temp-2");
                var windTwo = $("#wind-2");
                var humidityTwo = $("#humidity-2");

                var dayTwoBase = dayjs().add(1, "day").format('M/DD/YYYY')
                dayTwo.text(dayTwoBase);
                iconTwo.text("")
                iconTwo.append('<img src=' + iconTwoSrc + '>')
                tempTwo.text(data.list[11].main.temp + "°F")
                windTwo.text(data.list[11].wind.speed + " mph")
                humidityTwo.text(data.list[11].main.humidity + "%")

                var dayThree = $("#date-3");
                var iconThree = $("#emoji-3");
                var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + ".png"
                var tempThree = $("#temp-3");
                var windThree = $("#wind-3");
                var humidityThree = $("#humidity-3");

                var dayThreeBase = dayjs().add(2, "day").format('M/DD/YYYY')
                dayThree.text(dayThreeBase);
                iconThree.text("")
                iconThree.append('<img src=' + iconThreeSrc + '>')
                tempThree.text(data.list[19].main.temp + "°F")
                windThree.text(data.list[19].wind.speed + " mph")
                humidityThree.text(data.list[19].main.humidity + "%")

                var dayFour = $("#date-4");
                var iconFour = $("#emoji-4");
                var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + ".png"
                var tempFour = $("#temp-4");
                var windFour = $("#wind-4");
                var humidityFour = $("#humidity-4");

                var dayFourBase = dayjs().add(3, "day").format('M/DD/YYYY')
                dayFour.text(dayFourBase);
                iconFour.text("")
                iconFour.append('<img src=' + iconFourSrc + '>')
                tempFour.text(data.list[27].main.temp + "°F")
                windFour.text(data.list[27].wind.speed + " mph")
                humidityFour.text(data.list[27].main.humidity + "%")

                var dayFive = $("#date-5");
                var iconFive = $("#emoji-5");
                var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"
                var tempFive = $("#temp-5");
                var windFive = $("#wind-5");
                var humidityFive = $("#humidity-5");

                var dayFiveBase = dayjs().add(4, "day").format('M/DD/YYYY')
                dayFive.text(dayFiveBase);
                iconFive.text("")
                iconFive.append('<img src=' + iconFiveSrc + '>')
                tempFive.text(data.list[35].main.temp + "°F")
                windFive.text(data.list[35].wind.speed + " mph")
                humidityFive.text(data.list[35].main.humidity + "%")


            })
            .catch(
                error => console.log('ERROR')
            )

    })


});

function storeCityName(cityName) {
    if (cityName == "") return false;
    searchHistoryList.push(cityName);
    localStorage.setItem("searchHistoryList", JSON.stringify(searchHistoryList));
}

function displaySearchHistory() {
    var searchHistoryContainer = $("#searchHistoryContainer");
    var uniqueSearchHistory = [...new Set(searchHistoryList)];
    searchHistoryContainer.text("");

    for (i = 0; i < uniqueSearchHistory.length; i++) {
        var recentSearch = document.createElement('button');
        recentSearch.classList.add('btn', 'btn-secondary', 'recent-search');
        recentSearch.setAttribute('data-city', uniqueSearchHistory[i]);
        recentSearch.textContent = uniqueSearchHistory[i];
        recentSearch.addEventListener("click", function () {
            let cityName = $(this).data("city");
            $("#cityInput").val(cityName);
            $("#search").trigger("click");
        });
        $("#searchHistoryContainer").append(recentSearch);
    }

}
displaySearchHistory();