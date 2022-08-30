let name1 = false || 'tradexa';

// (names === '' || (names === null)|| (names === undefined) || (names === false)) ?  document.getElementById('app').innerText = 'Tradexa' :  document.getElementById('app').innerText = names;

document.getElementById('app').innerText = name1;

// OR operator

let name2= "Prasanna" || "Kumar" ; // Instead of "Prasanna" if there is null or undefined or false or empty string name2="Kumar"
console.log(name2);

// Nullish coalescing Operator

let name3= "Prasanna" ?? "Kumar" ; // Instead of "Prasanna" if there is null or undefined name2="Kumar"
console.log(name3);

// Truthy
if({}){
    console.log("Truthy");
}
if([]){
    console.log("Truthy");
}
if(1){
    console.log("Truthy"); 
}


//Falsey



