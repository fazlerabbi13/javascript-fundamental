function removeDublicate(names) {
    let newList = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (newList.includes(name) === false) {
            newList.push(name);

        }

    }
    return newList;
}

const namesList = ['nafi', 'robin', 'rabbi', 'sagor', 'limon', 'sagor',
    'rabbi', 'robi', 'nafi', 'hasan', 'limon'];
const rmDublicate = removeDublicate(namesList);
console.log(rmDublicate);