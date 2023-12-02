function isLeapyear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return "leapyear"
    }
    return "not a leapyear"
}

const myYear = isLeapyear(1955);
console.log(myYear);