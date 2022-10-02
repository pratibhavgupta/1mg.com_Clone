
const productContainers3 = [...document.querySelectorAll('.product3-container3')];
const nxtBtnnn = [...document.querySelectorAll('.nxt-btn3')];
const preBtnnn= [...document.querySelectorAll('.pre-btn3')];

productContainers3.forEach((item, i) => {
    let containerDimensions3 = item.getBoundingClientRect();
    let containerWidth3 = containerDimensions3.width;

    nxtBtnnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth3;
    })

    preBtnnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth3;
    })
})


let container = document.getElementById("one");

container.addEventListener("click", function(){
    let oneimg = document.getElementById("oneimg").src
    let onet = document.getElementById("onet").innerText
   
    let onep = document.getElementById("onep").innerText
    
    let obj = {
        oneimg:oneimg,
        onet:onet,
        onep:onep,
   }

   localStorage.setItem("product",JSON.stringify(obj))
   window.location.href="./prodPage.html"
})

let container2 = document.getElementById("one2");

container2.addEventListener("click", function(){
    let oneimg = document.getElementById("oneimg2").src
    let onet = document.getElementById("onet2").innerText
   
    let onep = document.getElementById("onep2").innerText
    let obj2 = {
        oneimg,
        onet,
        onep,
   }

   localStorage.setItem("product",JSON.stringify(obj2))
   window.location.href="./prodPage.html"
})

let container3 = document.getElementById("one3");

container3.addEventListener("click", function(){
    let oneimg= document.getElementById("oneimg3").src
    let onet = document.getElementById("onet3").innerText
   
    let onep = document.getElementById("onep3").innerText
    let obj3 = {
        oneimg,
        onet,
        onep,
   }

   localStorage.setItem("product",JSON.stringify(obj3))
   window.location.href="./prodPage.html"
})

let container4 = document.getElementById("one4");

container4.addEventListener("click", function(){
    let oneimg = document.getElementById("oneimg4").src
    let onet = document.getElementById("onet4").innerText
   
    let onep = document.getElementById("onep4").innerText
    let obj4 = {
        oneimg,
        onet,
        onep,
   }
//    window.location.href="./prodPage.html"
   localStorage.setItem("product",JSON.stringify(obj4))
      window.location.href="./prodPage.html"
})

