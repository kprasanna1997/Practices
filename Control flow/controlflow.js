console.log("--------------For Loop-----------------");

let array = ["Arun", "Bhavan", "Charan", "Dhavan"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("--------------While Loop-----------------");
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

console.log("--------------Do While Loop-----------------");
let j=0;
do {
    console.log(array[j]);
    j++;
} while (j < array.length);

console.log("--------------if-else Loop-----------------");

let pass="Kp@121"

if(pass.length>10){
    console.log("Strong Password");
}else if(pass.length>7 || pass.length>5 && pass.includes("@") ){
    console.log("Better password");
}else{
    console.log("Weak password");
}

console.log("--------------Switch case-----------------");
let choice="b"

switch(choice){
    case 'O':
    case 'o':
        console.log("You have selected Orange colour");
        break;
    case 'B':
    case 'b':
        console.log("You have selected Black colour");
        break;
    case 'Y':
    case 'y':
        console.log("You have selected Yellow colour");
        break;
    default : 
        console.log("You not selected any colour");
}
