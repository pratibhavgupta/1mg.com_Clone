const arr = [
  {
    title: "Ensure Vanilla Powder Refill",
    name: "Ensure Vanilla Powder Refill",
    price: 30,
  },
  {
    title: "Ensure Vanilla Powder Refill",
    name: "Ensure Vanilla Powder Refill",
    price: 10,
  },
];

localStorage.setItem("arr", JSON.stringify(arr)) || [];
//  const membership=document.getElementById("a_membership");
let data = JSON.parse(localStorage.getItem("arr"));
console.log(data)

// let data=JSON.parse(localStorage.getItem('movie'));

// function array(data) {
//     let data_div = document.getElementById("a_checkout");
//     data_div.innerHTML = null;
//     // data_div.id='a_checkout';
//     let data = JSON.parse(localStorage.getItem("arr"));

  
//     data.forEach(function (el) {
//       let div = document.createElement("div");
//       console.log(div);
//       let p_name = document.createElement("p");
//       p_name.innerHTML = el.name;
  
//       let p_price = document.createElement("p");
//       p_price.innerHTML = el.price;
  
//       let title = document.createElement("title");
//       title.innerHTML = el.title;
  
//       div.append(title, p_name, p_price);
  
//       data_div.append(div);
//     });
//   }
  





var product_total_amt = document.getElementById("product_total_amt");
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt = document.getElementById("total_cart_amt");
var discountCode = document.getElementById("discount_code1");
const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  console.log(itemprice.innerHTML);
  // console.log(itemval.value);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "#fff";
    itemval.style.color = "#000";

    for (let j = 0; j < data.length; j++) {
      itemprice.innerHTML = parseInt(itemprice.innerHTML) - data[j].price;
      product_total_amt.innerHTML =
        parseInt(product_total_amt.innerHTML) - data[j].price;
    }

    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) -
      parseInt(shipping_charge.innerHTML);
    if (total_cart_amt.innerHTML < 0) {
      total_cart_amt.innerHTML = 0;
    }
    //  if(total_cart_amt.innerHTML>50){
    //     parseInt(shipping_charge.innerHTML)=10;
    //     total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(shipping_charge.innerHTML);

    //  }
    //  else if(total_cart_amt.innerHTML>50){
    //     parseInt(shipping_charge.innerHTML)=20;
    //     total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(shipping_charge.innerHTML);

    //  }
  }
};
const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  // console.log(itemval.value);
  if (itemval.value >= 30) {
    itemval.value = 30;
    alert("max 30 allowed");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;

    for (let j = 0; j < data.length; j++) {
      itemprice.innerHTML = parseInt(itemprice.innerHTML) + data[j].price;
      product_total_amt.innerHTML =
        parseInt(product_total_amt.innerHTML) + data[j].price;
    }

    //  itemprice.innerHTML = parseInt(itemprice.innerHTML) + data.price;
    //  product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + data.price;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) -
      parseInt(shipping_charge.innerHTML);
  }
};

// coupon
const discount_code = () => {
  let totalamtcurr = parseInt(total_cart_amt.innerHTML);
  let error_trw = document.getElementById("error_trw");
  if (discountCode.value === "Azam" && total_cart_amt.innerHTML > 10) {
    let newtotalamt = totalamtcurr - 10;
    total_cart_amt.innerHTML = newtotalamt;
    error_trw.innerHTML = "Hurray! code is valid";
    alert("Coupon is Valid");
  } else {
    error_trw.innerHTML = "Try Again! Valid code is Azam";
    alert("Coupon is not valid try Again!");
  }
};

// carousel

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

let paydata =document.getElementById("push")
// localStorage.setItem("push", JSON.stringify(paydata)) || [];
// //  const membership=document.getElementById("a_membership");
// let push = JSON.parse(localStorage.getItem("push"));
// console.log(push)

// paydata = $('#push').text();

// set the item in localStorage
// paydata = localStorage.setItem('push', text);

// bind text to 'blur' event for div
// $('#push').on('blur', function() {

//     // check the new text
//     var newText = $(this).text();

//     // overwrite the old text
//     localStorage.setItem('push', newText);

//     // test if it works
//     alert(localStorage.getItem('push'));

// });