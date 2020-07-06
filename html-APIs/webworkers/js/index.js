/*
// check web worker support
function checkSupport() {
    if (typeof (Worker) !== 'undefined') {
        console.log(`Yes! Web Worker supported!`);
    } else {
        console.log(`Sorry! No web worker support..`);
    }
}

// create a web worker object

// check if a webworker exists
// if(typeof(w) == 'undefined') {
w = new Worker('./worker.js');
// }

// send and receive messages from the web Worker
// add an onmessage event listener to the web worker
w.onmessage = function (event) {
    document.getElementById('result').innerHTML = event.data;
};
// terminate a webworker
w.terminate();

// reuse the webworker
w = undefined;
*/

function startWorker() {
    if (typeof (Worker) !== 'undefined') {
        if (typeof (w) == 'undefined') {
            w = new Worker('worker.js');
        }
        w.onmessage = function (event) {
            document.getElementById('result').innerHTML = event.data;
        };
    } else {
        document.getElementById('result').innerHTML = 'Sorry! No Web Worker support.';
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

// let start = document.querySelector('#start-worker');
// let stop = document.querySelector('#stop-worker');
