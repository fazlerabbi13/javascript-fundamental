function canPay(changeArray, totalDue) {
     let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        const index = i;
        const element = changeArray[index];
         sum = sum + element;  
    }
    if(sum > totalDue){
        return true;
    }
    return false;
}
 const expense = [2, 5, 4];
  const due =10;
 const pay =canPay(expense, due);
 console.log(pay);
