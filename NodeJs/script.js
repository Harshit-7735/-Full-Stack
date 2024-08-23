console.log('hi');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// it wont work because these are browser based functions and we are running this in nodejs environment
// 
// window.alert('hi');
// console.log(window);
// console.log(document);
// console.log(localStorage);



//promises will work in nodejs
//fetch will not work in nodejs
//async await will work in nodejs
setTimeout(() => {  
    console.log('setTimeout');
}, 3000);
    

