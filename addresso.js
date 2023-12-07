const addresso = [
    {
        house: '15A',
        society: 'Earth perfect'
    }
];
function findAddress(obj) {
    const keys = ['street', 'house', 'society'];
    let address = '';
    for (const key of keys) {
        if (obj[key] !== undefined) {
            address += obj[key] + ', ';
            const fdf = obj[key];
            console.log(fdf);
        }
        else {
            return '__,';
        }

    }
    return address;

}
const printA = findAddress(addresso);
console.log(printA);
