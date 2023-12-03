// reverslatter
function reverse(text) {
    let reversed='';
    for (let i = text.length-1; i >= 0; i--) {
        const index = i;
        const element = text[i];
        reversed = reversed + element;
        // console.log(element, reversed);

    }
     return reversed;
}

// reversword
function reversword(str){
    let word = str.split(' ');
    let result = [];
    for(let i = word.length-1;i >= 0;i--){
        const index = i;
        const element = word[i];
        result.push(element);
       
    }
    return result;
}
const myTitle ="i am a good boy";
const string = reversword(myTitle);
console.log(string);