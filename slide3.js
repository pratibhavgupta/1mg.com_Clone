
// const productContainers = [...document.querySelectorAll('.product1-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
// const preBtn =  [...document.querySelectorAll('.pre-btn')];


// productContainers.forEach((item, i) =>{
//     let containerDimension = item.getBoundingClientRect();
//     let containerWidth = containerDimension.containerWidth;

//     nxtBtn[i].addEventListener('click', () =>{
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })




import { footer } from "./components/footer.js"
document.getElementById("footer").innerHTML = footer()


const productContainers = [...document.querySelectorAll('.product1-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn1')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

