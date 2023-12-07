function matchFinder(strinng1 ,string2){

    if(strinng1.includes(string2)){
        return true;
    }
    return false;

}

const string = matchFinder("John Doe","ohn");
console.log(string);