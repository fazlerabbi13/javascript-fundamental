function isEven(number){
    const remainder = number % 2 ;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(2003);
console.log(myNumber);