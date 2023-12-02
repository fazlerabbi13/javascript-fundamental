// function factorial(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
// }

// factorial(9);

// using while

function factorial(number) {
    let i = 1;
    let result = 1;
    while (i < number) {
        result= result*i;
        i++;
    }
    return result;
}
const output = factorial(7)
console.log(output)