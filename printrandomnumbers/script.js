var i; // i is undefined
var text = " ";
{
    let i = 0; // assigning a value for i only within the block 
    while (i<10){
        text += "The values inside the block: "+ i + "</br>"; i++;
        }

    document.getElementById("result").innerHTML = text;
}

document.write("The value of i outside the book is: "+i);


