// if (typeof (EventSource) !== 'undefined') {
//     console.log(`Yes! Server-sent events supported.`);
// } else {
//     console.log(`Sorry! No server-sent events support...`);
// }

// let sournce = new EventSource("demo_sse.php");
// source.onmessage = function (event) {
//     document.getElementById("result").innerHTML += event.data + "<br>";
// };

if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("demo_sse.php");
    source.onmessage = function (event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
    };
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}