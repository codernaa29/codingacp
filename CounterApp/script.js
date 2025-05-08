window.onload = function () {
    var value = 0;
    var number = document.getElementById("number");

    var button_increment = document.getElementById("button-increment");
    var button_decrement = document.getElementById("button-decrement");
    var button_reset = document.getElementById("button-reset");

    button_increment.onclick = function () {
        value++;
        number.innerText = value;
    };

    button_decrement.onclick = function () {
        value--;
        number.innerText = value;
    };

    button_reset.onclick = function () {
        value = 0;
        number.innerText = value;
    };
};