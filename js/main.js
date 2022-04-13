// Call Elements
let click = document.querySelectorAll(".click");
let background = document.querySelector(".background");
let back =  document.querySelector(".back");
let valid = document.querySelectorAll(".valid");
let pledge = document.getElementsByName("pledge");
let thank = document.querySelector(".thank");
// Mobile 
let menu = document.querySelector("nav > div")
let menuIcon = document.querySelector("nav .menue")
let closeIcon = document.querySelector("nav .close")

background.style.display = "none"; 
// When Click On Main Buttons
click.forEach(function(ele){
    ele.onclick = function() {
        background.style.display = "block";
        back.style.display = "block";
        thank.style.display = "none";
    }
})
// When Click On Icon Close
back.children[0].children[1].addEventListener("click", () =>background.style.display = "none")
// When Click On Choose A Pledge
valid.forEach(function(ele){
    ele.addEventListener("click", function(){
        valid.forEach(function(el){
            el.style.border = "1px solid #c2c0c0";
            el.children[0].children[0].style.backgroundColor = "unset";
            el.children[2].style.display = "none";
        })
        ele.style.border = "1.5px solid hsl(176, 50%, 47%)";
        ele.children[0].children[0].style.backgroundColor = "hsl(176, 50%, 47%)";
        ele.children[2].style.display = "flex";
    })
})
// When Click To Pledge
pledge.forEach(function(ele){
    ele.onclick = function(){
        if (ele.previousElementSibling.children[0].value != "" && ele.previousElementSibling.children[0].value >= parseInt(ele.previousElementSibling.children[0].id)) {
            back.style.display = "none";
            thank.style.display = "block";
        }
    }
})
// When Click On Got It 
thank.children[3].onclick = () => background.style.display = "none";
// When Click On Mobile Icons
menuIcon.addEventListener("click", function(){
    menu.style.display = "unset";
    menuIcon.style.display = "none";
    closeIcon.style.display = "unset";
})
closeIcon.addEventListener("click", function(){
    menu.style.display = "none";
    menuIcon.style.display = "unset";
    closeIcon.style.display = "none";
})
