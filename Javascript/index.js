const body = document.querySelector("body");
const textbox = document.querySelector("h1 span");
const heading = document.querySelector("h1");
const input = document.querySelector("input");

/*
let count =0;
body.addEventListener('click',()=>{
    console.log("You clicked");
textbox.innerHTML=++count;

})
*/

/*
let count =0;
heading.addEventListener('click',(event)=>{
    console.log(event);
    textbox.innerHTML=++count;
})
*/

body.addEventListener("keydown", (event) => {
  // console.log(event.key);
});

body.addEventListener("keypress", (event) => {
  // console.log(event.key);
});

body.addEventListener("mousemove", (event) => {
  // console.log({
  //     x:event.clientX,
  //     y:event.clientY
  // });
});
input.addEventListener("focusin", (event) => {
  // console.log("focus in");
});
input.addEventListener("focusout", () => {
  // console.log("focus out");
});

input.addEventListener("focus", (e) => {
  // console.log("input is focused");
});
let count = 0;
window.addEventListener("focus", (e) => {
//   console.log("Changed the tab");
});

window.addEventListener("blur", (e) => {
//   console.log("Changed the tab  blur");
});

window.addEventListener("resize", (e) => {
    // console.log("Resized");
    });

    window.addEventListener('scroll',(e)=>{
        console.log("scrolled ",window.scrollX,window.scrollY);
    })