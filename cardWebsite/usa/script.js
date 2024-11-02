document.addEventListener('DOMContentLoaded', () => {
 
});

/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
    var $animation_elements = $('.anim');
    var $window = $(window);
    
    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
    (element_top_position <= window_bottom_position)) {
    $element.addClass('animated');
    } else {
    $element.removeClass('animated');
    }
    });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    });
    /**********************Scroll Animation "END"************************************/
    
    /**********************Change color of center aligned animated content small Circle  "START"************************************/
    $(document).ready(function(){
        $(" .debits").hover(function(){
            $(" .center-right").css("background-color", "#4997cd");
            }, function(){
            $(" .center-right").css("background-color", "#fff");
        }); 
    });
    $(document).ready(function(){
        $(".credits").hover(function(){
            $(".center-left").css("background-color", "#4997cd");
            }, function(){
            $(".center-left").css("background-color", "#fff");
        }); 
    });
    /**********************Change color of center aligned animated content small Circle  "END"************************************/

// Example flight API using AviationStack (free tier)
const flightApiKey = 'df31bec6525fc9a841a458916a37131e';

const fetchFlightsButton = document.getElementById('fetch-flights');
const flightsDataContainer = document.getElementById('flights-data');

fetchFlightsButton.addEventListener('click', () => {
    console.log("Harsh Kaushik")
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${flightApiKey}`)
        .then(response => response.json())
        .then(data => {
            flightsDataContainer.innerHTML = '';
            data.data.forEach(flight => {
                const flightItem = document.createElement('div');
                flightItem.className = 'flight-item';
                flightItem.innerHTML = `
                    <h3>${flight.airline.name}</h3>
                    <p>Flight Number: ${flight.flight.iata}</p>
                    <p>Departure: ${flight.departure.airport}</p>
                    <p>Arrival: ${flight.arrival.airport}</p>
                `;
                flightsDataContainer.appendChild(flightItem);
            });
        })
        .catch(error => {
            flightsDataContainer.innerHTML = '<p>Error fetching flight data.</p>';
            console.error('Error fetching flight data:', error);
        });
});




const weatherApiKey = 'fdec9c501msh0ca2720615d60e9p19fafbjsnfdea9c55d7bd';
const weatherApiHost = 'weather-by-api-ninjas.p.rapidapi.com';

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;
    fetch(`https://${weatherApiHost}/v1/weather?city=${city}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': weatherApiKey,
            'X-RapidAPI-Host': weatherApiHost
        }
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            document.getElementById('cloud_pct').innerHTML = response.cloud_pct || 'undefined';
            document.getElementById('humidity').innerHTML = response.humidity || 'undefined';
            document.getElementById('humidity2').innerHTML = `${response.humidity || 'undefined'}<small class="text-muted fw-light"> %</small>`;
            document.getElementById('max_temp').innerHTML = response.max_temp || 'undefined';
            document.getElementById('min_temp').innerHTML = response.min_temp || 'undefined';
            document.getElementById('sunrise').innerHTML = response.sunrise ? new Date(response.sunrise * 1000).toLocaleTimeString() : 'undefined';
            document.getElementById('sunset').innerHTML = response.sunset ? new Date(response.sunset * 1000).toLocaleTimeString() : 'undefined';
            document.getElementById('temp').innerHTML = response.temp || 'undefined';
            document.getElementById('temp2').innerHTML = response.temp || 'undefined';
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees || 'undefined';
            document.getElementById('wind_speed').innerHTML = response.wind_speed || 'undefined';
            document.getElementById('wind_speed2').innerHTML = response.wind_speed || 'undefined';
        })
        .catch(err => {
            console.error(err);
            document.getElementById('cloud_pct').innerHTML = 'undefined';
            document.getElementById('humidity').innerHTML = 'undefined';
            document.getElementById('humidity2').innerHTML = 'undefined';
            document.getElementById('max_temp').innerHTML = 'undefined';
            document.getElementById('min_temp').innerHTML = 'undefined';
            document.getElementById('sunrise').innerHTML = 'undefined';
            document.getElementById('sunset').innerHTML = 'undefined';
            document.getElementById('temp').innerHTML = 'undefined';
            document.getElementById('temp2').innerHTML = 'undefined';
            document.getElementById('wind_degrees').innerHTML = 'undefined';
            document.getElementById('wind_speed').innerHTML = 'undefined';
            document.getElementById('wind_speed2').innerHTML = 'undefined';
        });
};

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

getWeather("Delhi");

