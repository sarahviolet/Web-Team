// Sample data for demonstration
let trips = [];

// Function to display trips in the table
function displayTrips() {
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    trips.forEach(trip => {
        const row = `<tr>
            <td>${trip.tripType}</td>
            <td>${trip.departureDate}</td>
            <td>${trip.returnDate}</td>
            <td>${trip.passengerCount}</td>
            <td>${trip.passengerAge}</td>
            <td>
                <button onclick="editTrip('${trip.tripType}')">Edit</button>
                <button onclick="deleteTrip('${trip.tripType}')">Delete</button>
            </td>
        </tr>`;
        bookingList.innerHTML += row;
    });
}

// Function to add a new booking
function addBooking(event) {
    event.preventDefault();

    const tripType = document.getElementById('tripTypeAdd').value;
    const departureDate = document.getElementById('departureDateAdd').value;
    const returnDate = document.getElementById('returnDateAdd').value;
    const passengerCount = document.getElementById('passengerCountAdd').value;
    const passengerAge = document.getElementById('passengerAgeAdd').value;

    const newTrip = { tripType, departureDate, returnDate, passengerCount, passengerAge };
    trips.push(newTrip);

    displayTrips();
}

// Function to edit a trip
function editTrip(tripType) {
    const tripIndex = trips.findIndex(t => t.tripType === tripType);

    if (tripIndex !== -1) {
        const trip = trips[tripIndex];

        const newDepartureDate = prompt('Enter new Departure Date:', trip.departureDate);
        const newReturnDate = prompt('Enter new Return Date:', trip.returnDate);
        const newPassengerCount = prompt('Enter new Passenger Count:', trip.passengerCount);
        const newPassengerAge = prompt('Enter new Passenger Age:', trip.passengerAge);

        trip.departureDate = newDepartureDate || trip.departureDate;
        trip.returnDate = newReturnDate || trip.returnDate;
        trip.passengerCount = newPassengerCount || trip.passengerCount;
        trip.passengerAge = newPassengerAge || trip.passengerAge;

        // Log the updated list for verification
        console.log('Updated Trips List:', trips);
    } else {
        console.log('Trip not found.');
    }
}


        function deleteTrip(tripType) {
            const index = trips.findIndex(trip => trip.tripType === tripType);
        
            if (index !== -1) {
                trips.splice(index, 1);
                displayTrips();
            }
        }
    
        

