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

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.value;
//     let uemail = mail.value;
//     let upass = psw.value;
//     let userDetails={
//         uname , uemail, upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))

// })

let mainEle = document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="2px solid red";
mainEle.style.width="550px";
mainEle.style.height="550px";
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");

let image = document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
image.style.width="550px"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");

let h1 = document.createElement("h1");
h1.innerText = "CAT";
h1.style.textAlign="center"

let btn = document.createElement("button");
btn.innerText="View More";
btn.style.border="none";
btn.style.padding="20px";
btn.style.backgroundColor="dodgerblue";
btn.style.color="white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);


