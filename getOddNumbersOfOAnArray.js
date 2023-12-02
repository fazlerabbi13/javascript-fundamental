
function getSumOfAnArray(numbers){
    let sum = 0 ;
    for(let i = 0;i < numbers.length; i++){
        const index = i ;
        const element = numbers[index];
       
        sum = sum + element;
        
    }
    return sum;
}
const myarr = [12, 34, 56, 33, 90, 78, 43, 91, 71];
const sumOfArry = getSumOfAnArray(myarr);
console.log(sumOfArry);




function getOddNumbersOfAnArray(numbers){
    const OddNumbers =[];
    for(let i = 0; i < numbers.length; i++){
        const index = i ;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index , element);
            OddNumbers.push(element);
        }
    }
    return OddNumbers;
}


const oddnumber = getOddNumbersOfAnArray(myarr);
console.log(oddnumber);
const oddnumbersum = getSumOfAnArray(oddnumber);
console.log(oddnumbersum)
