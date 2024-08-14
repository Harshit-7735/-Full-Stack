// window.alert("this is an alert");
// const name=prompt("Enter your name");
// console.log(name);

// web apis are the browser's built-in features that allow us to do things like set timers, make network requests, and interact with the DOM.
const heading = document.createElement("h1");
let timer;
let count = 0;
const stop = document.createElement("button");
stop.innerHTML = "Stop";
document.body.append(stop);
stop.addEventListener("click", () => {
  clearInterval(timer);
});
const play = document.createElement("button");
play.innerHTML = "Play";
document.body.append(play);
play.addEventListener("click", () => {
  timer = setInterval(() => {
    count++;
    heading.innerHTML = count;
  }, 1000);
});
document.body.append(heading);
timer = setInterval(() => {
  count++;
  heading.innerHTML = count;
}, 1000);
