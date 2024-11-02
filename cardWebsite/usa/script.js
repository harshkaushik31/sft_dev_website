document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const prevButton = document.querySelector('.timeline-button.prev');
    const nextButton = document.querySelector('.timeline-button.next');
    let currentIndex = 0;

    function updateTimeline() {
        timelineEvents.forEach((event, index) => {
            event.classList.remove('active');
            if (index === currentIndex) {
                event.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : timelineEvents.length - 1;
        updateTimeline();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < timelineEvents.length - 1) ? currentIndex + 1 : 0;
        updateTimeline();
    });

    updateTimeline();
});

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

