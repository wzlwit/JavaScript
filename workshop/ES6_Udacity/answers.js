/**
 * lesson 1: Syntax 
 */
// todo: 3.Quiz: Using Let and Const(1-1)

const CHARACTER_LIMIT = 255;
const posts = [
    "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
    "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
    "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].slice(0, CHARACTER_LIMIT));
    }
}

displayPosts();

// todo: 5.Quiz: Build an HTML Fragment
const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = '<div class="card">' +
        '<h3 class="name">' + animal.name + '</h3>' +
        '<img src="' + animal.name + '.jpg" alt="' + animal.name + '" class="picture">' +
        '<div class="description">' +
        '<p class="fact">' + animal.fact + '</p>' +
        '<ul class="details">' +
        '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
        '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
        '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
        '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
        '</ul>' +
        '<p class="brief">' + animal.summary + '</p>' +
        '</div>' +
        '</div>';

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

// todo: 7. quiz: destructuring arrays(1-3)
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

// todo: 13. Quiz: Writing a For...of Loop (1-4)
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (let day of days) {
    console.log(day.charAt(0).toUpperCase() + day.substr(1).toLowerCase());
}

// todo: Quiz: Using the Rest Parameter (1-5)

/**
 * Lesson2: Function
 */

//  todo: 4. Quiz: Convert Function into an Arrow Function (2-1)
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

console.log(...squares);

// todo: 11. Quiz: Using Default Function Parameters (2-2)
const buildHouse = ({ floors = 1, color = 'red', walls = 'brick' } = {}) => {
    return (`Your house has ${floors} floor(s) with ${color} ${walls} walls.`)
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({ floors: 3, color: 'yellow' })); // Your house has 3 floor(s) with yellow brick walls.

// todo: 20. Quiz: Building Classes and Subclasses (2-3)
class Vehicle {
    constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn);
    }
}

// your code goes here

/* tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
*/

class Bicycle extends Vehicle {
    constructor(color = 'blue', wheels = 2, horn = 'honk honk') {
        super(color, wheels, horn);
    }
}

/**
 * Lesson 3: Built-ins
 */
// todo: 9. Quiz: Using Sets (3-1)
const myFavoriteFlavors = new Set();
myFavoriteFlavors.add('chocolate chip');
myFavoriteFlavors.add('cookies and cream');
myFavoriteFlavors.add('strawberry');
myFavoriteFlavors.add('vanilla');
myFavoriteFlavors.delete('strawberry');

//
/**
 * todo: 11. Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

const uniqueFlavors = new WeakSet();
const flavor1 = { flavor: 'Chocolate' };
const flavor2 = { flavor: 'chocolate' };

uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);

console.log(uniqueFlavors);

let iteratorObjForKeys = members.keys(); iteratorObjForKeys.next();


/**
 * todo: 15.Looping Through Maps
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    // console.log(key, value);
    console.log(member[0], member[1])
}

for (const member of members) {
    for (const member of members) {
        [key, value] = member
        console.log(key, value)
    }
}

/**
 * !Proxy
 *  the get trap - lets the proxy handle calls to property access
    the set trap - lets the proxy handle setting the property to a new value
    the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
    the has trap - lets the proxy handle the using in operator
    the deleteProperty trap - lets the proxy handle if a property is deleted
    the ownKeys trap - lets the proxy handle when all keys are requested
    the construct trap - lets the proxy handle when the proxy is used with the new keyword as a constructor
    the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
    the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
    the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
    the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
    the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
    the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

 */

/** Lesson 3
 * 26. Sending Data into/out of a Generator
 */
function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join('\n');

/**Lesson 3
 * todo: 26. Quiz
 */
function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();

//! The toppings array will have undefined as its last item


/** Lesson 4
 * todo: Polyfill/Polyfiller
 */

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}