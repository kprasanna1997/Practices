// Here methods are shown in the object itself
function User(name,email){
    this.name=name;
    this.email=email;
    this.online=false;
/*
    this.login=function(){
     console.log(this.email,"has logged in");
    }
    this.logout=function(){
     console.log(this.email,"has logged out");
    }*/
}

// let userOne=new User("Adam","adam@gmail.com")
// let userTwo=new User("Smith","smith@gmail.com")
// console.log(userOne,userTwo);

// Prototype (Here methods are shown in the __proto__ part of the Object and we cannot add prototypre to the instances)

User.prototype.logIn=function(){
    this.online=true;
    console.log(this.email,"has logged in");
}
User.prototype.logOut=function(){
    this.online=false;
    console.log(this.email,"has logged out");
}

let userOne=new User("Adam","adam@gmail.com")
let userTwo=new User("Smith","smith@gmail.com")
console.log(userOne,userTwo);
userOne.logIn();
console.log(userOne);

// Inheritance 
function Admin(...args){
    User.apply(this,args);
    this.role="Super Admin";
}

// Inheritting the methods of User
Admin.prototype=Object.create(User.prototype);


let admin=new Admin("Roy","adminroy@gmail.com");
console.log(admin);
let users=[userOne,userTwo,admin];
console.log(users);

Admin.prototype.deleteUser=function(user){
    users=users.filter(u=>u.email!=user.email)
    console.log("User deleted");
}

admin.deleteUser(userOne);
console.log(users);

