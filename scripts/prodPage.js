import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import {footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer();

let prod = JSON.parse(localStorage.getItem("product"))

document.getElementById("myprod").src = prod.oneimg;

title.innerText = prod.onet;


document.querySelector(".pri").innerText="₹"+prod.onep;
document.querySelector("#pri").innerText="₹"+prod.onep;

let add=document.getElementById("add");
add.innerText=prod.onet;

let dotbtn = document.querySelector("#dot1");
dotbtn.addEventListener("click", function () {
  dotbtn.style.backgroundColor = "#ff6f61";
  dotbtn.style.borderRadius = "15px";

  dotbtn1.style.backgroundColor = "white";
});

let dotbtn1 = document.querySelector("#dot");
dotbtn1.addEventListener("click", function () {
  dotbtn1.style.backgroundColor = "ff6f61";
  dotbtn1.style.borderRadius = "15px";

  dotbtn.style.backgroundColor = "white";
});

let addCart = document.querySelector("#addCart");
addCart.addEventListener("click", function () {
  addCart.innerText="ADDED TO CART";
  
  let prodArr=JSON.parse(localStorage.getItem("prodArr"))||[];
  let obj={
    img:prod.oneimg,
    title:prod.onet,
    price:prod.onep,
  }

  prodArr.push(obj);
  localStorage.setItem("prodArr",JSON.stringify(prodArr));

});

// youtube iframe

let iframe=document.createElement("iframe");
iframe.src="https://www.youtube.com/embed/GrTWQQE_1W8" ;

you.append(iframe);

// <iframe width="560" height="315" src="https://www.youtube.com/embed/GrTWQQE_1W8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>