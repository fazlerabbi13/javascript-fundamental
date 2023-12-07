// function sortMaker(arr) {
//     let largeNumber = arr[0];
//     let newArr =[];
//     for(let i = 0; i < arr.length; i++){
//         const index = i;
//         const element = arr[i];
//         if(element > largeNumber){
//             largeNumber = element;
//             newArr.push(largeNumber) ;
        
//         }
        
//     }
//     return newArr;
// }
//  const numbers = [5, 8];
//  const sort = sortMaker(numbers);
//  console.log(sort);


function sortMaker(arr){
     const [number1, number2] = arr;
    const largest = Math.max(number1, number2);
    const smallest = Math.min(number1, number2);
    return [ largest, smallest]
}

const inputArray = [4, 5];
const resultArray = sortMaker(inputArray);
console.log(resultArray);






