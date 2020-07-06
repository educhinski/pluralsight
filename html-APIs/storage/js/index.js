// check browser support
if (typeof (Storage) !== 'undefined') {
    // store
    localStorage.setItem('firstname', 'Sam');
    localStorage.setItem('lastname', 'Smith');

    // retrieve
    document.getElementById('result').innerHTML =
        `Firstname: ${localStorage.firstname} ` +
        `LastName: ${localStorage.lastname}`;
} else {
    document.getElementById('result').innerHTML =
        "Sorry, your web browser does not support Web Storage...";
}

// counter
function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result-counter").innerHTML =
            "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result-counter").innerHTML =
            "Sorry, your browser does not support web storage...";
    }
}

// session storage
function clickCounterSession() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result-session").innerHTML =
            "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result-session").innerHTML =
            "Sorry, your browser does not support web storage...";
    }
}