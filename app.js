const ul = document.getElementById("ul");
const ham = document.getElementById("ham");
const closei = document.getElementById("close");
console.log(ul)
console.log(ham)
ham.addEventListener("click",()=>{
    ul.classList.toggle("show")
    if(ul.classList.contains("show")){
        ham.style.display="none";
        closei.style.display="block";
    }
    else{
        ham.style.display="block";
        closei.style.display="none"
    }
    
})