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