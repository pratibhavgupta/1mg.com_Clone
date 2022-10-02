
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
    let oneimg2 = document.getElementById("oneimg2").src
    let onet2 = document.getElementById("onet2").innerText
   
    let onep2 = document.getElementById("onep2").innerText
    let obj2 = {
        oneimg2:oneimg2,
        onet2:onet2,
        onep2:onep2,
   }

   localStorage.setItem("product",JSON.stringify(obj2))
   window.location.href="./prodPage.html"
})

let container3 = document.getElementById("one3");

container3.addEventListener("click", function(){
    let oneimg3= document.getElementById("oneimg3").src
    let onet3 = document.getElementById("onet3").innerText
   
    let onep3 = document.getElementById("onep3").innerText
    let obj3 = {
        oneimg3:oneimg3,
        onet3:onet3,
        onep3:onep3,
   }

   localStorage.setItem("product",JSON.stringify(obj3))
   window.location.href="./prodPage.html"
})

let container4 = document.getElementById("one4");

container4.addEventListener("click", function(){
    let oneimg4 = document.getElementById("oneimg4").src
    let onet4 = document.getElementById("onet4").innerText
   
    let onep4 = document.getElementById("onep4").innerText
    let obj4 = {
        oneimg4:oneimg4,
        onet4:onet4,
        onep4:onep4,
   }
//    window.location.href="./prodPage.html"
   localStorage.setItem("product",JSON.stringify(obj4))
      window.location.href="./prodPage.html"
})

