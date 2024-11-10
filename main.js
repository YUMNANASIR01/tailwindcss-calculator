"use strict";
let button = document.querySelectorAll("button");
let myscreen = document.getElementById("myscreen");
console.log(button);
button.forEach((b) => {
    b.addEventListener("click", (e) => {
        if (e.target.textContent == "AC") {
            myscreen.value = "";
        }
        else if (e.target.textContent == "Del") {
            myscreen.value = (myscreen.value).slice(0, -1);
        }
        else if (e.target.textContent == "=") {
            myscreen.value = eval(myscreen.value);
        }
        if (!(e.target.textContent == "Del" || e.target.textContent == "AC" || e.target.textContent == "=")) {
            myscreen.value += e.target.textContent;
        }
    });
});
