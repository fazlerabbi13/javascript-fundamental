function largestName(names) {
    let longgestName = names[0];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(name.length > longgestName.length){
            longgestName = name
        }
    }
    return longgestName;
}

const namesList = ['nafi', 'robin', 'fazle rabbi', 'sagor', 'limon', 'sagor khan',
    'rabbi', 'robi', 'nafi', 'hasan ali ', 'limon'];
const largeName = largestName(namesList);
console.log(largeName);


