var shoppingCart = {
    book : 4,
    sunglass : 5,
    pen : 4,
    shosw : 3,
    mouse : 8
}
// get values from object in a multiple ways
// var penCount = shoppingCart.pen;
// console.log(penCount)
// var penCount2 = shoppingCart['mouse'];
// console.log(penCount2);
//  var properties =Object.keys(shoppingCart)
// //  console.log(properties);
//  var values = Object.values(shoppingCart);
// console.log(values);


// set value in a object multiple ways

// shoppingCart.mouse = 12 ;
// console.log(shoppingCart);
// shoppingCart['pen'] = 8 ;
// console.log(shoppingCart);
// var propertyName = "book" ;

// shoppingCart[propertyName] = 20 ;
// console.log(shoppingCart);


// for ( var i = 0; i < properties.length; i++){
//     var propertyName =properties[i];
//     var value = shoppingCart[propertyName];
//     console.log(propertyName,value)

// }


// for (var proper in shoppingCart){
//     // console.log(properties);
//     // const value = shoppingCart[proper];
//     console.log(proper);
// }

// const p = {
//     "p1": "value1",
//     "p2": "value2",
//     "p3": "value3"
// };

// for (const [key, value] of Object.entries(p)) {
//   console.log(`${key}: ${value}`);
// }

for (const [key , value] of Object.entries(shoppingCart) ){
    console.log(` ${key} : ${value}`)
}