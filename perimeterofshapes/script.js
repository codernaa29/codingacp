let choice = prompt("Welcome to the Perimeter Calculator.\nEnter your choice:\n1. Perimeter of Square.\n2. Perimeter of Equilateral Triangle.\n3. Perimeter of Circle.\n4. Perimeter of Rectangle");

if (choice == "1") {
    const l = prompt("Enter the length: ");
    const result = 4 * l;
    alert("The perimeter is: " + result);
}

else if (choice == "2") {
    const l = prompt("Enter the length: ");
    const result = 3 * l;
    alert("The perimeter is: " + result);
}
else if (choice == "3") {
    const r = prompt("Enter the radius: ");
    const result = (2 * 3.1416 * r );
    alert("The perimeter is: " + result);
}

else if (choice == "4") {
    const l = prompt("Enter the length: ");
    const w = prompt("Enter the width: ");
    const result = 2 * (l + w);
    alert("The perimeter is: " + result);
}