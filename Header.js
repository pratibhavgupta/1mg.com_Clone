
// let slide = document.getElementById("slider-1");

// let btn1 = document.getElementById("btn1")

// let btn2 = document.getElementById("btn2")

// let btn3 = document.getElementById("btn3")

// let btn4 = document.getElementById("btn4")

// let btn5 = document.getElementById("btn5")

// let btn6 = document.getElementById("btn6")

// btn1.onclick = function(){
//     slide.style.transform = "translateX(0px)"

// }
// btn2.onclick = function(){
//     slide.style.transform = "translateX(-100%)"

// }

// btn3.onclick = function(){
//     slide.style.transform = "translateX(-200%)"

// }
// btn4.onclick = function(){
//     slide.style.transform = "translateX(-300%)"

// }
// btn5.onclick = function(){
//     slide.style.transform = "translateX(-400%)"

// }
// btn6.onclick = function(){
//     slide.style.transform = "translateX(-500%)"

// }


import { navbar } from "./components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);




// document.getElementById("check").addEventListener("click",function(){
//   console.log("1wasrdtfgfd")
// })
