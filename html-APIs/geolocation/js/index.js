// getCurrentPosition - gets the user's position

let x = document.getElementById('mygeo');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

getLocation();

function showPosition(position) {
    x.innerHTML =
        `
    Latitude ${position.coords.latitude}
    Longitude ${position.coords.longitude}
    `;
    showError();
}

// handling errors and rejections
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = 'User denied the request for Geolocation';
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            x.innerHTML = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = 'An unknown error occured';
            break;
        default:
            x.innerHTML = 'An error occured';
            break;
    }
}

// // displaying results in a map
// function showPosition(position) {
//     let laton = `${position.coords.latitude} , ${position.coords.longitude}`;

//     let img_url = `http://maps.googleapis.com/maps/api/staticmap?center=${laton}&zoom=14&size=400x300&sensor=false`;
//     document.getElementById('mapholder').innerHTML = `<img src="${img_url}">`;
// }