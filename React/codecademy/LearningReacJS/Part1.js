import React from 'react';
import ReactDOM from 'react-dom';

// try this weired code:
const h1 = <h1>Hello world</h1>;


//elment and attribute
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;


//nested JSX. multiple line wrapped by ()
var myDiv = (
    <div>
        <h1>Hello World</h1>
    </div>
);


//JSX Outer Elements. must have exactly one outermost element.
//wrap by one <div></div> to debug
const blog = (
    <div>
        ...
    </div>
);


//rendering JSX
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

var myList = (
    <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Berry</li>
    </ul>
);
ReactDOM.render(myList, document.getElementById("app"));


//className (class is reserved in JS)
var myDiv = <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv, document.getElementById("app"));


// self-closing tag must includes < />
const space = <br />;


//regular JS in JSX
ReactDOM.render(<h1>{}2 + 3}</h1>, document.getElementById('app'));
var math = <h1>2 + 3 = {2 + 3}</h1>;
ReactDOM.render(
    math,
    document.getElementById('app')
);


//attributes
var gooseImg = <img src="{goose}" />;
ReactDOM.render(gooseImg, document.getElementById("app"));


//action listener
function myFunc() { };
<img onclick={myFunc} />


// injected if doesn't work, but reverse works
let img;
if (coinToss() === "heads") {
    img = <img src={pics.kitty} />;
} else img = <img src={pics.doggy} />;


//injected ternary operator works
<h1>    {age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff'}  </h1>
// use && for if statement
{ !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }


// This is fine in JSX, not in an explicit array:
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>


// This is also fine!
const liArray = [
    <li>item 1</li>,
    <li>item 2</li>,
    <li>item 3</li>
];

<ul>{liArray}</ul>


//.map()
const listItems = strings.map(string => <li>{string}</li>);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('app'));


//keys
const peopleLis = people.map((person, i) => <li key={"person_" + i}>{person}</li>);


//React.createElement
const h1 = <h1>Hello World</h1>;
//==
const h1 = React.createElement("hi", null, "Hello, world");