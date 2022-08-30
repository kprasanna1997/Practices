/* If third parameter is not passed then default false will be taken and it will be event bubbling bottom-top
document.querySelector("#grandParent")
.addEventListener("click",()=>{
    console.log("Grandparent has been clicked");  
})

document.querySelector("#parent")
.addEventListener("click",()=>{
    console.log("Parent has been clicked");
})

document.querySelector("#child")
.addEventListener("click",()=>{
    console.log("Child has been clicked");
})
*/

// Both will be act as same
document.querySelector("#grandParent")
.addEventListener("click",()=>{
    console.log("Grandparent has been clicked");  
},true)

document.querySelector("#parent")
.addEventListener("click",()=>{
    console.log("Parent has been clicked");
},true)

document.querySelector("#child")
.addEventListener("click",()=>{
    console.log("Child has been clicked");
},true)


/* Now event capturing will takeplace up-down
document.querySelector("#grandParent")
.addEventListener("click",()=>{
    console.log("Grandparent has been clicked");  
},true)

document.querySelector("#parent")
.addEventListener("click",()=>{
    console.log("Parent has been clicked");
},true)

document.querySelector("#child")
.addEventListener("click",()=>{
    console.log("Child has been clicked");
},true)
*/

/* controlling capturinng and bubbling and always capturing takeplace first then bubbling.
document.querySelector("#grandParent")
.addEventListener("click",(e)=>{
    console.log("Grandparent has been clicked");  
    e.stopPropagation();
},true)

document.querySelector("#parent")
.addEventListener("click",(e)=>{
    console.log("Parent has been clicked");
},true)

document.querySelector("#child")
.addEventListener("click",(e)=>{
    console.log("Child has been clicked");
},true)
*/

/* controlling capturinng and bubbling and always capturing takeplace first then bubbling.
document.querySelector("#grandParent")
.addEventListener("click",(e)=>{
    console.log("Grandparent has been clicked");  
    e.stopPropagation();
},false)

document.querySelector("#parent")
.addEventListener("click",(e)=>{
    console.log("Parent has been clicked");
},false)

document.querySelector("#child")
.addEventListener("click",(e)=>{
    console.log("Child has been clicked");
    e.stopPropagation();
},false)
*/
