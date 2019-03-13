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

/**
 * *5. Extracting Properties and Values
 * todo: Question 3 of 3
 * Write an expression using Object.keys() to extract the keys (i.e., property names) from the triangle object:
 */
const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
};

Object.keys(triangle);

/**
 * *Lesson 2: Functions at Runtime
 * 2. First-Class Functions
 */

/**
 * todo: Question
Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.
*/

const higherOrderFunction = () => {
    return () => {
        return 8;
    }
}

/**
 * 3. Callbacks
 * todo: Question 4 of 5
 * * Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical', sales: 820000
    },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(value => {
    return `${value.name} by ${value.artist} sold ${value.sales} copies`;
});

console.log(albumSalesStrings);

/**
 * todo: Question 5 of 5
 * * Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical', sales: 820000
    },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(ele => {
    return ele.name.length >= 10 && ele.name.length <= 25;
});

console.log(results);


// * 5. Closures
// https://classroom.udacity.com/courses/ud711/lessons/fd2e70b8-84b4-4793-a89e-78a695ecf89d/concepts/4a704701-a6ec-4882-8075-13524d1cd68a


function outerFunction() {
    let num1 = 5;

    return function (num2) {
        console.log(num1 + num2);
    };
}

let result = outerFunction();//result refers to inner function, the closure

result(10);
//15

/**
 * todo: Applications of Closures
Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray() {
    var myArray = [1, 1, 1];
    return () => {
        return [...myArray, 1];
    }
}

function expandArray() {
    var myArray = [1, 1, 1];
    return function () {
        myArray.push(1);
        return myArray;
    };
}

/**
 * 6. Immediately-invoked Function Expression
 */
(function (x, y) {
    console.log(x * y);
}
)(2, 3);

(function sayHi() {
    alert('Hi there!');
}());


//  todo: private scope
const myFunction = (
    function () {
        const hi = 'Hi!';
        return function () {
            console.log(hi);
        }
    }
)();


/**
 * *Lesson 3: Classes and Objects
 * 2. Constructor Functions

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/
const Sandwich = function (bread, meat, vegetables) {
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
}

// 4. Setting Our Own 'this'
const driver = {
    name: 'Danica',
    displayName: function () {
        console.log(`Name: ${this.name}`);
    }
};

const car = {
    name: 'Fusion'
};

driver.displayName.bind(car);