/**
 * *Lesson 1: Objects In Depth 
 */

/** 
 * 1. Introduction
 * todo: Question 1 of 6
Recall that arrays can store many different types of data, not just strings!
Below, create an array called `mixedArray` that contains:

* A number
* A string
* A boolean
* Another array

The order and length of the array are up to you; just be sure to include
at least one of each data type listed above.
*/
const mixedArray = [16, 'hello world', true, [1, 1, 2, 3, 5, 8]];


// todo: Question 2 of 6
/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/
const menu = {
    name: 'Salted Caramel Ice Cream',
    price: 2.95,
    ingredients: ['butter', 'ice cream', 'salt', 'sugar']
}

/**
 * !Another issue is when variables are assigned to property names.
 * Let's say we declare myVariable, and assign it to the string 'color': const myVariable = 'color';
 * bicycle[myVariable]; returns 'blue' because the variable myVariable gets substituted with its value (the string 'color') and
 * bicycle['color']'s value is 'blue'. However, bicycle.myVariable; returns undefined:
 */



/**
 * 2. Create and Modify Properties
 */

// removing properties
delete printer.mode;
// *true
printer.mode;
// *undefined

// *In JavaScript, a primitive (e.g., a string, number, boolean, etc.) is immutable. In other words, any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function.

/**
 * 3. Invoking Object Methods
 */
// todo: Question 2 of 6
const myArray = [function alerter() { alert('Hello!'); }];

myArray[0]();

/**
 * todo: Question 3 of 6
Write an expression that invokes the function referenced by the bell object's ring property:
 */
const bell = {
    color: 'gold',
    ring: function () {
        console.log('Ring ring ring!');
    }
};

bell.ring();


// todo: Question 5 of 6
const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
        this.height += 1;
    }
};

tree.growOneFoot()

/**
 * odo: Question 6 of 6

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/
const chameleon = {
    color: 'green',
    changeColor: function () {
        this.color = this.color === 'green' ? 'pink' : 'green'
    }
}