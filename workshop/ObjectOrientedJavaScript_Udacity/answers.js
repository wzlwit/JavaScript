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

