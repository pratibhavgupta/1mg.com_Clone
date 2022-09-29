

let data = document.getElementById("a_address");
// // console.log(data)
// localStorage.setItem('data',JSON.stringify(data));

function passValues(){
    // document.addEventListener("click", function(){
        let house = document.getElementById("houseno").value;
        let landmark = document.getElementById("landmark").value;
        let pincode = document.getElementById("pincode").value;
        let locality = document.getElementById("locality").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let customer = document.getElementById("customer").value;
        let mobile = document.getElementById("mobile").value;

        // let address={}
        // address.house = house;
        // address.landmark = landmark;
        // address.pincode = pincode;
        // address.locality = locality;
        // address.city = city;
        // address.state = state;
        // address.customer = customer;
        // address.mobile = mobile;

        // let addressData = localStorage.getItem("addressData")||[];
        // addressData.push(address);
        // localStorage.setItem("addressData", addressData)

        localStorage.setItem("house no", house);
        localStorage.setItem("landmark", landmark);
        localStorage.setItem("pincode", pincode);
        localStorage.setItem("locality", locality);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("customer", customer);
        localStorage.setItem("mobile", mobile);
    // })
    return false;
}
// addAddress()


document.getElementById("result").innerHTML = localStorage.getItem("house no")
document.getElementById("result1").innerHTML = localStorage.getItem("landmark")
document.getElementById("result2").innerHTML = localStorage.getItem("pincode")
document.getElementById("result3").innerHTML = localStorage.getItem("locality")
document.getElementById("result4").innerHTML = localStorage.getItem("city")
document.getElementById("result5").innerHTML = localStorage.getItem("state")
document.getElementById("result6").innerHTML = localStorage.getItem("customer")
document.getElementById("result7").innerHTML = localStorage.getItem("mobile")
