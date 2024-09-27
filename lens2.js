
alert("this website (clone) is only for mobile view");
let bu2=document.querySelector(".hlnavv");
let bu=document.querySelector(".hlnav");
let tab=document.querySelector(".taab")



bu.addEventListener("click",()=>{
    tab.style.height="700px";
    tab.style.width="80%";
});
bu2.addEventListener("click",()=>{
    tab.style.height="0px";
    tab.style.width="0%";
})
