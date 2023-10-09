function isLeapYear (year) {
    return year % 4 === 0;
}
var year = + prompt("Введи год:");
if(isNaN(year)){
    alert("Нужно ввести целое число.")
}
if(isLeapYear(year)){
    alert("Год " + year + " - високосный.");
} else {
    alert("Год " + year + " - не високосный.");
}
