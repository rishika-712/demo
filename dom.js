// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// //ele[0].computedStyleMap.backgroundcolor="tomato"
// //!spread operator :- it will takeout each and every value from the original array
// //! and store it inside and more new array(pure array).
// let x = [...ele];
// x.map(element=>{
//     element.Style.backgroundColor="orange"
// })

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
//! addEventListener("event ,()=>{}")

// let ele = document.createElement("hi");
// ele.innerText = "Dynamic creation of html element";
// ele.id = "demo";

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let uemail = mail.value;
    let upass = psw.value;
    let userDetails={
        uname , uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))

})


