product = (a,b) => a*b;
try {
    document.getElementById("result").innerHTML = a;
        // if the function is invoked here the result will be displayed
        // if any varible is given the error message get displayed
    }
    catch (err) {
        document.getElementById("result").innerHTML = err.message;
    }

