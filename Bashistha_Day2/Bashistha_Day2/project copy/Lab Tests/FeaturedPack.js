let h3_1to_store_LS = document.getElementById('h3_1to_store_LS');
let price1_to_store_LS = document.getElementById('p1Price');
let arr = JSON.parse(localStorage.getItem('FeaturedPackages')) || [];
let x1 = localStorage.getItem('x1') || 0;
function press_cart1() {
  let obj = {
    Package1Name: h3_1to_store_LS.innerText,
    Package1Price: +price1_to_store_LS.innerText,
  };
  if (x1 === 0) {
    arr.push(obj);
    localStorage.setItem('FeaturedPackages', JSON.stringify(arr));
    console.log(arr);
    x1++;
    localStorage.setItem('x1', +x1);
    return;
  } else {
    alert('Try To Add another Package');
    return;
  }
}

let h3_2to_store_LS = document.getElementById('h3_2to_store_LS');
let price2_to_store_LS = document.getElementById('p2Price');

let x2 = localStorage.getItem('x2') || 0;
function press_cart2() {
  let obj2 = {
    Package2Name: h3_2to_store_LS.innerText,
    Package2Price: +price2_to_store_LS.innerText,
  };
  if (x2 === 0) {
    arr.push(obj2);
    localStorage.setItem('FeaturedPackages', JSON.stringify(arr));
    console.log(arr);
    x2++;
    localStorage.setItem('x2', +x2);
    return;
  } else {
    alert('Try To Add another Package');
    return;
  }
}




let h3_3to_store_LS = document.getElementById('h3_3to_store_LS');
let price3_to_store_LS = document.getElementById('p3Price');

let x3 = localStorage.getItem('x3') || 0;
function press_cart3() {
  let obj3 = {
    Package3Name: h3_3to_store_LS.innerText,
    Package3Price: +price3_to_store_LS.innerText,
  };
  if (x3 === 0) {
    arr.push(obj3);
    localStorage.setItem('FeaturedPackages', JSON.stringify(arr));
    console.log(arr);
    x3++;
    localStorage.setItem('x3', +x3);
    return;
  } else {
    alert('Try To Add another Package');
    return;
  }
}



let h3_4to_store_LS = document.getElementById('h3_4to_store_LS');
let price4_to_store_LS = document.getElementById('p4Price');

let x4 = localStorage.getItem('x4') || 0;
function press_cart4() {
  let obj4 = {
    Package4Name: h3_4to_store_LS.innerText,
    Package4Price: +price4_to_store_LS.innerText,
  };
  if (x4 === 0) {
    arr.push(obj4);
    localStorage.setItem('FeaturedPackages', JSON.stringify(arr));
    console.log(arr);
    x4++;
    localStorage.setItem('x4', +x4);
    return;
  } else {
    alert('Try To Add another Package');
    return;
  }
}