// Sample data for demonstration
let trips = [];
let tripID = 1;

// Function to display trips in the table
function displayTrips() {
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    trips.forEach(trip => {
        const row = `<tr>
            <td>${trip.tripID}</td>
            <td>${trip.tripType}</td>
            <td>${trip.departureDate}</td>
            <td>${trip.returnDate}</td>
            <td>${trip.passengerCount}</td>
            <td>${trip.passengerAge}</td>
            <td>
                <button onclick="editTrip(${trip.tripID})">Edit</button>
                <button onclick="deleteTrip(${trip.tripID})">Delete</button>
            </td>
        </tr>`;
        bookingList.innerHTML += row;
    });
}

// Function to add a new booking
function addBooking(event) {
    event.preventDefault();

    var allTripType = document.getElementsByName('tripType');
    var tripTypeToAdd;
    for (let i = 0; i < allTripType.length; i++) {
        if (allTripType[i].checked) {
            tripTypeToAdd = allTripType[i].value;
            break;
        }
    }

    if (!tripTypeToAdd) {
        alert('Please select a trip type');
        return;
    }

    const departureDate = document.getElementById('departureDateAdd').value;
    const returnDate = document.getElementById('returnDateAdd').value;
    const passengerCount = document.getElementById('passengerCountAdd').value;
    const passengerAge = document.getElementById('passengerAgeAdd').value;

    const newTrip = { tripID, tripType: tripTypeToAdd, departureDate, returnDate, passengerCount, passengerAge };
    trips.push(newTrip);
    tripID++;

    displayTrips();
}

// Function to edit a trip
function editTrip(tripID) {
    const tripIndex = trips.findIndex(t => t.tripID === tripID);

    if (tripIndex !== -1) {
        const trip = trips[tripIndex];

        const newDepartureDate = prompt('Enter new Departure Date:', trip.departureDate);
        const newReturnDate = prompt('Enter new Return Date:', trip.returnDate);
        const newPassengerCount = prompt('Enter new Passenger Count:', trip.passengerCount);
        const newPassengerAge = prompt('Enter new Passenger Age:', trip.passengerAge);

        // Date validation
        if (isValidDate(newDepartureDate) && isValidDate(newReturnDate)) {
            trip.departureDate = newDepartureDate || trip.departureDate;
            trip.returnDate = newReturnDate || trip.returnDate;
            trip.passengerCount = newPassengerCount || trip.passengerCount;
            trip.passengerAge = newPassengerAge || trip.passengerAge;
            // Display new trip list with edited trip
            displayTrips();
        } else {
            alert('Invalid date format');
        }
    } else {
        console.log('Trip not found.');
    }
}

// Function to validate date format
function isValidDate(dateString) {
    return dateString.trim() !== '';
}

function deleteTrip(tripID) {
    const index = trips.findIndex(trip => trip.tripID === tripID);

    if (index !== -1) {
        trips.splice(index, 1);
        displayTrips();
    }
}