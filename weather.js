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

//----------------------------------START OVER---------------------------------------//

$(document).ready(function(){

    $('#getWeather').click(function(){

        var city = $("#cityWeather").val();

        if(city != ''){

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q= " + city + "&units=imperial" + "&appid=3a1badee57acecc35569f0a56b894c72",
                method: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);

                }

            });

        }else{
            $("#error").html("Fill in this Field, Fool!");
    }

});

});