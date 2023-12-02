function getSumOfAnArray(arr){
    let sum = 0 ;
    for(let i = 0;i < arr.length; i++){
        const index = i ;
        const element = arr[index];
       
        sum = sum + element;
        
    }
    return sum;
}
const myarr = [12, 34, 56, 33, 90, 78, 43, 91, 71];
const sumOfArry = getSumOfAnArray(myarr);
console.log(sumOfArry);
