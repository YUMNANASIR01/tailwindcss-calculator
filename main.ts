let button:any = document.querySelectorAll("button")
let myscreen:any = document.getElementById("myscreen")
console.log(button);
button.forEach((b:any)=>{
    b.addEventListener("click",(e:any)=>{
    if (e.target.textContent == "AC") {
        myscreen.value = ""
    }else if (e.target.textContent == "Del") {
        myscreen.value = (myscreen.value).slice(0,-1)
    }else if (e.target.textContent == "=") {
        myscreen.value = eval(myscreen.value)
    }
    if (!(e.target.textContent == "Del" || e.target.textContent == "AC" || e.target.textContent == "="))
         {
             myscreen.value += e.target.textContent
        
    }
    })
})