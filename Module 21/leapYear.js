function leapYear (year){
    if(year % 4 == 0 && year % 100 !== 0){
        return true;
    }
    else if(year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}

const year1 = 2020;
const year2 = 2021;
const year3 = 2024;
const year4 = 2002;

console.log(leapYear(year1));
console.log(leapYear(year2));
console.log(leapYear(year3));
console.log(leapYear(year4));


