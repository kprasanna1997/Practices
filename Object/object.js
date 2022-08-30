let user={
    name:"Akshay Kumar",
    age:30,
    email:"akshaykumar@gmail.com",
    blogs:[
        {title:"All is well", likes:20000},
        {title:"All the best",likes:500000}
    ],
    login:function(){
       console.log("User has logged in");
    },
    logout(){
        console.log("User has logged out");
    },
    bloLogs(){
        this.blogs.forEach(blog=>{
            console.log(`This author has written this blog ${blog.title} and reached likes of ${blog.likes}`);
        })
    }
}
user.login();
user.logout();
user.bloLogs();

let prop="name"
console.log(user[prop]); // Another way of getting data from object


const testObj = {
    name: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = "name";  // Change this line
  const player = testObj[playerNumber];   // Change this line
  console.log(player);
  const playerNumbers = 16;  // Change this line
  const players = testObj[playerNumbers];   // Change this line
  console.log(players);

console.log("------------------Math Object--------------------");

const num1=5.1;
const num2=7.9;
console.log(`The given number is ${num1} and rounded number is ${Math.round(num1)}`);
console.log(`The given number is ${num2} and rounded number is ${Math.round(num2)}`);
console.log(`The given number is ${num2} and floored number is ${Math.floor(num2)}`);
console.log(`The given number is ${num1} and ceiled number is ${Math.ceil(num1)}`);
console.log(`The given number is ${num2} and trunced number is ${Math.trunc(num2)}`);
console.log("the random number from 0 to 100 is",Math.floor(Math.random()*100));


console.log("------------------Primitive and Reference Datatype--------------------");
let a=100;
let b=a;
console.log(a,b);
a=200;
console.log(a,b);

let arr1=[1,2,3,4,5,6]
let arr2=arr1;
console.log(arr1,arr2);
arr1[4]=500;
console.log(arr1,arr2);


