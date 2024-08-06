// console.log(1);
// for(let i=0;i <10000;i++){
// console.log('100p');

// }
// console.log(2);
// console.log(3);
/*
const cb=()=>{
    console.log("callback");
}
setTimeout(cb,5000);
*/
console.log(1);

    setTimeout(() => {
        console.log(4);
    }, 0);
setTimeout(()=>{
    console.log(2);
},0)

for(let i=0;i<10000;i++){
    console.log('100p');
}
console.log(3);

// for loop executing first then settimeout function is executing because settimeout function is executing after the for loop is executed because of the event loop in javascript 
// settimeout function is executing after the for loop is executed


// set timeout is a native code Javascript doesn't know about the settime out function ..iot will wait in the queue and after all the functions is executed the set timeout will get executed
