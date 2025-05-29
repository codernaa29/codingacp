var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isRunning = true;
var interval;
var clickCount = 0;

function change() {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    document.getElementById("number").innerText = numbers[randomIndex];
}

function startStop() {
    clickCount++;

    if (isRunning) {
        // d: If true, start changing and set to false
        interval = setInterval(change, 100);
        isRunning = false;
    } else {
        // e: If false, stop changing and set to true
        clearInterval(interval);
        isRunning = true;
    }
}
