// openweathermap.org API call format: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=3a1badee57acecc35569f0a56b894c72

//API key: 3a1badee57acecc35569f0a56b894c72

//openweathermap.org API w city and state: api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid=3a1badee57acecc35569f0a56b894c72

// openweathermap.org API w city, state, and country code: api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid=3a1badee57acecc35569f0a56b894c72

// //$("#enter").on("click", function () {
//     event.preventDefault()
//     console.log("weather in your city");

// $("#enter");

//     var searchWeather = $("searchWeather").val();

//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryURL + "&appid=3a1badee57acecc35569f0a56b894c72";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     });




// function buildQueryURL() {


// };

//----------------------------------BEGIN---------------------------------------//

$(document).ready(function () {

    function getWeather (city){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q= " + city + "&units=imperial" + "&appid=3a1badee57acecc35569f0a56b894c72",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var widget = display(data);
    
                $("#showWeather").html(widget);
    
                //empty the input field after the user clicks search
                $("#cityWeather").val('');
            }
    
        });
    }

    //grabs info from the popular destination buttons

    $(".list-group-item").on("click", function() {
        // console.log(this)
        var cityName = $(this).text()
        console.log(cityName)
        getWeather(cityName)

    })

    $('#getWeather').click(function () {

        var city = $("#cityWeather").val();

        if (city != '') {

            getWeather(city)
            // $.ajax({
            //     url: "https://api.openweathermap.org/data/2.5/weather?q= " + city + "&units=imperial" + "&appid=3a1badee57acecc35569f0a56b894c72",
            //     method: "GET",
            //     dataType: "jsonp",
            //     success: function (data) {
            //         console.log(data);
            //         var widget = display(data);

            //         $("#showWeather").html(widget);

            //         //empty the input field after the user clicks search
            //         $("#cityWeather").val('');
            //     }

            // });

        } else {
            $("#error").html("Fill in this Field, Fool!");
        }

    });

});





function display(data) {
    return "<h2 'font-size:45px; font-weight: bold;' class='text-center'>You're Locked in to the Weather in " + data.name + " in that " + data.sys.country + " (country code...figure it out) </h2>" +
        "<h3 style='padding-left:35px;'><strong>What's Happening in the Sky?</strong>:" + data.weather[0].main + "</h3>" +
        "<h3 style='padding-left:35px;'><strong>Further Info on That?</strong>: <img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
        "<h3 style='padding-left:35px;'><strong>How's that Thermostat Looking?</strong>: " + data.main.temp + " &deg;F</h3>" +
        "<h3 style='padding-left:35px;'><strong>Gimme a Range: What's the Max?</strong>: " + data.main.temp_max + " &deg;F</h3>" +
        "<h3 style='padding-left:35px;'><strong>How about the Min?</strong>: " + data.main.temp_min + " &deg;F</h3>" +
        "<h3 style='padding-left:35px;'><strong>Am I Gonna Be Sweating in that Humidity? </strong>: " + data.main.humidity + "% </h3>" +
        "<h3 style='padding-left:35px;'><strong>Any mini-Tornados Happening? What's the Wind Speed?</strong>: " + data.wind.speed + " MpH</h3>";
};

