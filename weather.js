// openweathermap.org API call format: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=3a1badee57acecc35569f0a56b894c72

//API key: 3a1badee57acecc35569f0a56b894c72

//openweathermap.org API w city and state: api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid=3a1badee57acecc35569f0a56b894c72

// openweathermap.org API w city, state, and country code: api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid=3a1badee57acecc35569f0a56b894c72

var weatherSearch = $("weatherSearch");

function buildQueryURL() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q= " + cityName + stateName + countryCode + " &appid=3a1badee57acecc35569f0a56b894c72";