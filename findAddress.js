const myObject = {  
    street:10,
    
    society:'Earth Perfect'
 };

 function findAddress(obj) {
    const keysArray =Object.keys(obj);

    let address = '';
   
  for (const key of keysArray) {
    if (obj[key] !== undefined) {
      address += obj[key] + ',';
    }
   
     else {
      address += '__,';
    }
    
  }
  return address;
    
 }

 const address =findAddress(myObject)
 console.log(address);