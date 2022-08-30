let person = {
    fullName: "Arun Kumar",
    age: 25,
    address: {
        city: "Pune",
        zip: 411001
    },
    hobbies: ["VolleyBall", "Chess", "Cooking"]
}


let {fullName:fName, age, address: { city, zip, state = "Maharashtra" },hobbies:[first,,third]} = person;
console.log(fName,age,city,zip,state,first,third);

let subjects=["Science","Mathematics","SocialStudies","English","Kannada","Hindi"];

let [start,second,,fourth,five,six]=subjects
console.log(start,second,fourth,five,six);
let[...subject]=subjects
console.log(subject);
