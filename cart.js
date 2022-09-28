//  const arr = [ 
//     membership={
//         title:"Membership added to cart",
//         discription:"Save an additional 7% on prescription medicine & earn 5% NeuCoins on other health products. Get same day, next day with Rapid and free standard delivery.", 
//     }
//  ]


//  const membership=document.getElementById("a_membership");




 var product_total_amt = document.getElementById('product_total_amt');
 var shipping_charge = document.getElementById('shipping_charge');
 var total_cart_amt = document.getElementById('total_cart_amt');
 var discountCode = document.getElementById('discount_code1');
 const decreaseNumber = (incdec, itemprice) => {
     var itemval = document.getElementById(incdec);
     var itemprice = document.getElementById(itemprice);
     console.log(itemprice.innerHTML);
     // console.log(itemval.value);
     if (itemval.value <= 0) {
         itemval.value = 0;
         alert('Negative quantity not allowed');
     } else {
         itemval.value = parseInt(itemval.value) - 1;
         itemval.style.background = '#fff';
         itemval.style.color = '#000';
         itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
         product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
         total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(shipping_charge.innerHTML);
         if(total_cart_amt.innerHTML<0){
            total_cart_amt.innerHTML=0;
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
 }
 const increaseNumber = (incdec, itemprice) => {
     var itemval = document.getElementById(incdec);
     var itemprice = document.getElementById(itemprice);
     // console.log(itemval.value);
     if (itemval.value >= 30) {
         itemval.value = 30;
         alert('max 30 allowed');
         itemval.style.background = 'red';
         itemval.style.color = '#fff';
     } else {
         itemval.value = parseInt(itemval.value) + 1;
         itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
         product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
         total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(shipping_charge.innerHTML);
     }
 }

 // coupon
 const discount_code = () => {
     let totalamtcurr = parseInt(total_cart_amt.innerHTML);
     let error_trw = document.getElementById('error_trw');
     if (discountCode.value === 'Azam'&&total_cart_amt.innerHTML>10) {
         let newtotalamt = totalamtcurr - 10;
         total_cart_amt.innerHTML = newtotalamt;
         error_trw.innerHTML = "Hurray! code is valid";
         alert("Coupon is Valid")
     } else {
         error_trw.innerHTML = "Try Again! Valid code is Azam";
         alert("Coupon is not valid try Again!")
     }
 }
 