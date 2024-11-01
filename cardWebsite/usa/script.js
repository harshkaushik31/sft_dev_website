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

    const fetchFlightsButton = document.getElementById('fetch-flights');
    const flightsDataContainer = document.getElementById('flights-data');
    const apiKey = '67212bf661b5bc65fc97b574';

    fetchFlightsButton.addEventListener('click', () => {
        fetch(`https://www.flightapi.io/api/v1/flights?apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                flightsDataContainer.innerHTML = '';
                data.flights.forEach(flight => {
                    const flightItem = document.createElement('div');
                    flightItem.className = 'flight-item';
                    flightItem.innerHTML = `
                        <h3>${flight.airline}</h3>
                        <p>Flight Number: ${flight.flightNumber}</p>
                        <p>Departure: ${flight.departure}</p>
                        <p>Arrival: ${flight.arrival}</p>
                    `;
                    flightsDataContainer.appendChild(flightItem);
                });
            })
            .catch(error => {
                flightsDataContainer.innerHTML = '<p>Error fetching flight data.</p>';
                console.error('Error fetching flight data:', error);
            });
    });
});