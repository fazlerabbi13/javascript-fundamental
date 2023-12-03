function largestNumber(numbers) {
    let largestNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element > largestNum) {
            largestNum = element
        }
        
    }
    return largestNum;
}


const myNumbers = [34, 10, 45, 67, 90, 120, 800, 405];
const largest = largestNumber(myNumbers);
console.log(largest);