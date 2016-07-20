// replace this key with your Weather API key
var key = "dd8bb86f825f50fbc291a36f08dadfc7";

$(document).on("ready",function(){
  $("#getWeather").click(function() {
    // Get the city from the text box
    var city = $("#city").val();

    // Get the data
    $.getJSON("http://api.openweathermap.org/data/2.5/weather", 
    {
      appid: key,
      q: city,
      units: "imperial"
    }, weatherCallback);

    // $.ajax({
    //   url: "http://api.openweathermap.org/data/2.5/weather",
    //   data: {
    //   appid: key,
    //   q: city,
    //   units: "imperial"
    // }, success: weatherCallback,
    //   dataType: json
    // });
  });
});

function weatherCallback(data) {
  $("#city-name").html(data.name);
  $("#city-temp").html(data.main.temp);
  console.log(data);
}