console.log("---------------Named Function----------------------");
function price(price,gst){
    let total=0;
    total=price+(price*gst)/100;
    return total
}

let tPrice=price(100,20)
console.log(tPrice);

console.log("---------------Anonymous Function----------------------");
let nPrice=function(price,gst){
    let total=0;
    total=price+(price*gst)/100;
    return total 
}
let nTPrice=nPrice(100,20)
console.log(nTPrice);

console.log("---------------Arrow Function----------------------");
let aPrice=(price,gst)=>{
    let total=0;
    total=price+(price*gst)/100;
    return total 
}
let aTPrice=aPrice(100,20)
console.log(aTPrice);

console.log("---------------Self Invoked Function----------------------");
let sPrice=(function(price,gst){
    let total=0;
    total=price+(price*gst)/100;
    return total;
})(100,20)
console.log(sPrice);



