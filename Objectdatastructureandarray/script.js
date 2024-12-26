var student = {
    name: 'Noshin' ,
    age: '15' ,
    Grade: '9' ,
    hobbies: 'Coding' , 
    fav_sport: 'Football'
};

var color = ["white", "black", "red", "green", "blue"];
document.write("Student name is : " + student.name, "<br>", "student favorite sport is: " +student.fav_sport);

document.write("Before Poping the colors are: " +color.join("^"));

document.write("My favorite color is :  +color[3]");


color.pop();
document.write("After Poping the colors are : " +
    color.join("*"));