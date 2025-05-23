var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var changing = false;
var interval;

function changeNumber() {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    document.getElementById("number").innerHTML = numbers[randomIndex];
}

function toggleNumber() {
    if (changing == false) {
        interval = setInterval(changeNumber, 100);
        changing = true;
    } else {
        clearInterval(interval);
        changing = false;
    }
}
