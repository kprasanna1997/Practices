const para=document.querySelector('h1');
const paras=document.querySelectorAll('p');
const paraClass=document.getElementsByClassName('error')
const anch=document.querySelector('a')

para.innerText="Welcome to DOM";

paras.forEach(para=>{
   if(para.innerText.includes('Hello')) {
    para.classList.add('hello')
   }
   if(para.innerText.includes('Good')) {
    para.classList.add('good')
   }
   if(para.innerText.includes('All')) {
    para.classList.add('all')
   }
})

console.log(anch.getAttribute("href")); 
anch.setAttribute("href","https://www.youtube.com")
anch.innerText="Watch videos"
para.classList.toggle("all")
para.classList.toggle("all")
