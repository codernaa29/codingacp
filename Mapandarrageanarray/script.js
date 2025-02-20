var numbers = [25, 12, 19, 94];
function myFunction(num) {
    return num * 50;
}
var newarray = numbers.map(myFunction);
document.getElementById("product_value").innerHTML = "The Mapped values are: " +newarray;

function ascending() {
    newarray.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("product_value").innerHTML =
        "The ascending order of mapped values are: " + newarray;
}

function descending() {
    newarray.sort(function (a, b) {
        return b - a;
    });
    document.getElementById("product_value").innerHTML =
        "The descending order of mapped values are: " + newarray;
}
