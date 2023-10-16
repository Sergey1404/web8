function isLeapYear (year) {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        alert("Високосный год");
    } else {
        alert("Не является високосным");
    }
}
