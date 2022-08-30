class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.update=0;
    }
    login(){
        console.log(this.email,"has logged in");
        return this; // For method chaining
    }
    logout(){
        console.log(this.email,"has logged out"); 
        return this; // For method chaining
    }
    updateScore(){
        this.update++
        console.log(this.email,"has scored", this.update);
        return this; // For method chaining
    }
}

let userOne=new User("Akshay","akshay@gmail.com");
let userTwo=new User("Charn","charan@gmail.com")


userOne.login();
userTwo.updateScore();
// Method chaining
userOne.login().updateScore().updateScore().logout();

// Inheritance

class Admin extends User{
    deleteUser(user){
      users=users.filter(u=>u.email!=user.email)
    }
}

let admin=new Admin("Dew","admindew@gmail.com");
let users=[userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);


// Getter and Setter
class Square{
    constructor(width){
        this.width=width;
        this.height=width;
    }

    static isEqual(a,b){
        return a.width===b.width && a.height===b.height;
    }
    static isValidDimensions(w,h){
        return w===h;
    }

    get area(){
        return this.height*this.width;
    }
    set area(area){
        this.width=Math.sqrt(area);
        this.height=this.width
    }
}1  

let square1=new Square(4);
square1.area=625;
console.log(square1.area);  // Due setter this will act like a property not a function 

// Static methods are related to class but not to its instances like there will be no "this" keyword

let square2=new Square(10);
let square3=new Square(10.1);
console.log(Square.isEqual(square2,square3));
console.log(Square.isValidDimensions(7,7));

// Inheritance with constructor

class Person {
    constructor(name,age){
      this.name=name;
      this.age=age;
    }

    display(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person{
    constructor(name,age,yearOfExperience){
        super(name,age);
        this.yearOfExperience=yearOfExperience;
    }

    programming(){
        console.log(`${this.name} is coding.`);
    }
}

let person1= new Person("Albert",30);
console.log(person1);
person1.display()
let programmer1=new Programmer("Eistein",35,10);
console.log(programmer1);
programmer1.programming()


//Polymorphism

class Animals{
    constructor(name){
        this.name=name;
    }
    makeSounds(){
        console.log(`${this.name} makes sounds BOOM BOOM!!!`);
    }
}

class Dog extends Animals{
    constructor(name){
        super(name)
    }
    makeSounds(){
        console.log(`${this.name} makes sounds BUFF BUFF!!!`);
    }
}

let animal1=new Animals("Bug");
animal1.makeSounds();
let dog1=new Dog("Jerry");
dog1.makeSounds();
