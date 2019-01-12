/* lesson 3 Working with Browser Events */

//4. Quiz: Phases of an event
document.addEventListener('click', function () {
    console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});
// document.body will fire first. 
//default is false for the 3rd parameter (useCaputure). so listener will execute during bubble phase
//Capturing is from top to down. then bubble up. 



/* lesson 4  */

//1. Add Page Content Efficiently
/*
most time, 2nd version is a bit faster than  1st one in Chrome;
*/

//here is my codes
var start = performance.now();
const myDiv = document.createElement("div");
for (let i = 0; i < 200; i++) {
    myDiv.innerHTML += `<p>This is paragrahp number ${i}</p>`;
}
document.body.appendChild(myDiv);
var end = performance.now();
console.log(`time used is ${end - start} milliseconds!`)
//66.6 ms


//here is the first verstion
start = performance.now();
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
end = performance.now();
console.log(`time used is ${end - start} milliseconds!`)
//1.1ms


//here is the second version
start = performance.now();
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
end = performance.now();
console.log(`time used is ${end - start} milliseconds!`)
//0.7ms

