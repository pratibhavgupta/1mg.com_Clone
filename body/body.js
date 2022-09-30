// const productContainers = [...document.querySelectorAll('.product1-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
// const preBtn = [...document.querySelectorAll('.pre-btn1')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })

// let maincontainer = document.getElementById("mainContainer1");

// maincontainer.addEventListener("load", () =>{
// show();
// })

// function show(){
// document.getElementById("c4").style.display="inline-block";
// }

// import { navbar } from "../components/navbar.js"
// document.getElementById("navbar").innerHTML = navbar()
// 88888888
// let left = 1;
// let right = 7;
// function show() {
    
//   for (let i = left; i <= right; i++) {
    
//    document.getElementById("c" + i).style.display = "inline-block";
    
//   }
// }

// function leftfunction() {
//   if (left <= 2 && right <= 9) {
//     document.getElementById("c" + left).style.display = "none";

//     left += 1;
//     right += 1;

//     for (let i = left; i <= right; i++) {
//       document.getElementById("c" + i).style.display = "inline-block";
//     }
//   } else {
//     return;
//   }
// }

// 88888
// let rightbtn = document.getElementById("rightarro");
// rightbtn.addEventListener("click", () =>{
//     rightfunction()
    
// })
// 88888
// function rightfunction() {
//   if (left >= 2 && right >= 8) {
//     document.getElementById("c" + right).style.display = "none";

//     left -= 1;
//     right -= 1;

//     for (let i = left; i <= right; i++) {
//       document.getElementById("c" + i).style.display = "inline-block";
//     }
//   } else {
//     return;

//   }
// }
// 88888
//  document.getElementById("rightarro").addEventListener("click", () =>{
//     rightfunction();
    
// })



//  document.getElementById("c9").addEventListener("click",() =>{
//     console.log(1)
// })
