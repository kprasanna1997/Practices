console.log("--------------String Methods-----------------");

let firstName="Akshay";
let lastName="Kumar";

let names=firstName+" "+lastName;
console.log(names);

let sNames=names.toUpperCase();
console.log(sNames);
let uNames=names.toLowerCase();
console.log(uNames);
console.log(names.includes('a',6));

let rplc=names.replace("Kumar","Raj");
console.log(rplc);

let nNames=names.slice(7,13)
console.log(nNames);

let nnNames=names.substr(7,5)
console.log(nnNames);

let user="    Pra   "
console.log(user.trimStart());
console.log(user.trimEnd());
console.log(user.trim());

console.log(names.charAt(10));
console.log(names.indexOf("a",10));
console.log(names.lastIndexOf("m"));


console.log("--------------Template Literals-----------------");
let dob="12/12/2012"
console.log(`My name is ${names} and my date of birth is ${dob}`);
let html=`<div>
         <h1>${names}</h1>
         <p> born on ${dob}</p>
         </div>`
console.log(html);

console.log("--------------Array Methods-----------------");

let arrays=[1,2,3,4,5,6,7,8,9,10];
let array=["Arun","Bhavan","Charan","Dhavan"];

console.log(array.includes(1,0));
for(let value of array){
    console.log(value);
}
for(let index in array){
    console.log(array[index]);
}

array.forEach((v,i,arr)=>{
    console.log(`value at index ${i} is ${v}`);
})
console.log(array.includes("Charan",1));

let pushArray=array.push("Easten")
console.log(pushArray,array);
let popArray=array.pop()
console.log(popArray,array);
let shiftArray=array.shift();
console.log(shiftArray,array);
let unshiftArray=array.unshift("Duston")
console.log(unshiftArray,array);
let sliceArray=arrays.slice(1,3)
console.log(sliceArray,arrays);
let spliceArray=arrays.splice(3,3,12,14,15,16)
console.log(spliceArray,arrays);




