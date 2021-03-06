/*1. JSX */
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


/* 2. React Components */

import React from 'react';
import ReactDOM from 'react-dom';


//create a Component Class. (override) only one method render(), telling how to build components
class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}


//create a Component Instace
<MyComponentClass />;


//render component;
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));


//example
class QuoteMaker extends React.Component {
    render() {
        return (
            <blockquote>
                <p>What is important now is to recover our senses.</p>
                <cite>
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">Susan Sontag</a>
                </cite>
            </blockquote>
        );
    }
};

ReactDOM.render(<QuoteMaker />, document.getElementById('app')
);



// Conditional in a Render Function
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
    render() {
        if (fiftyFifty) {
            return (
                <h1>Tonight I'm going out WOOO</h1>
            );
        } else {
            return <h1>Tonight I'm going to bed WOOO</h1>;
        }
    }
};
ReactDOM.render(<TonightsPlan />, document.getElementById('app'));


// this. in a Component and 'get' method
import React from 'react';
import ReactDOM from 'react-dom';
class MyName extends React.Component {
    // name property goes here:
    get name() {
        return 'whatever-your-name-is-goes-here';
    }
    render() {
        return <h1>My name is {this.name}.</h1>;
    }
}
ReactDOM.render(<MyName />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component {
    scream() {
        alert('AAAAAAAAHHH!!!!!');
    }
    render() {
        return <button onClick={this.scream}>AAAAAH!</button>;
    }
}
ReactDOM.render(<Button />, document.getElementById('app'))


// Authorization Form
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render() {
        var login = (
            <form action="#" onSubmit={this.authorize}>
                <input type="password" placeholder="Passwrod" />
                <input type="submit" />
            </form>
        );
        const contactInfo = (
            <ul>
                <li>client@example.com</li>
                <li>555.555.5555</li>
            </ul>
        );
        return (
            <div id="authorization">
                {this.state.authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
                {this.state.authorized ? contactInfo : login};
            </div>
        );
    }
}

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);


/* Components Interaction import/export */
export class NavBar extends React.Component { };
import { NavBar } from './NavBar';


//this.props
class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);
        return (
            <div>
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{this.stringProps}</h2>
            </div>
        );
    }
}
ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));
/* output:
CHECK OUT MY PROPS OBJECT
*/
//It has some properties that JSON.stringify doesn't detect


//pass informations to element
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />


//show this.props on added information

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);
        return (
            <div>
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{stringProps}</h2>
            </div>
        );
    }
}
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('app'))
/* output:
CHECK OUT MY PROPS OBJECT
{"myProp":"Hello"}
//this.pros is shown as an objct
*/

// Render a Component's props
return <h1>Hi there, {this.props.myProp}</h1>


//when istanciate an class, it automatically invoke its render()method
export class Greeting extends React.Component {
    render() {
        if (this.props.signedIn == false) {
            return <h1>GO AWAY</h1>;
        } else {
            return <h1>Hi there, {this.props.name}!</h1>;
        }
    }
}
<Greeting name="Alison" signedIn={false} />
//{false} used, not string"false" to pass in an boolean



//pass ane event handler
export class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.talk}>
                Click me!
        </button>
        );
    }
}
//Talker.js
import { Button } from './Button';

class Talker extends React.Component {
    talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    render() {
        return <Button talk={this.talk} />;
    }
}

ReactDOM.render(
    <Talker />,
    document.getElementById('app')
);



//name convention
class MyClass extends React.Component {
    handleHover() {
        alert('I am an event handler.');
        alert('I will listen for a "hover" event.');
    }

    render() {
        return <Child onHover={this.handleHover} />;
    }
}



//this.props.children
export class List extends React.Component {
    render() {
        let titleText = `Favorite ${this.props.type}`;
        if (this.props.children instanceof Array) {
            titleText += 's';
            //pluralize title
        }
        return (
            <div>
                <h1>{titleText}</h1>
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <List type='Living Musician'>
                    <li>Sachiko M</li>
                    <li>Harvey Sid Fisher</li>
                </List>
                <List type='Living Cat Musician'>
                    <li>Nora the Piano Cat</li>
                </List>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);



//give a Class  default props (object)
Button.defaultProps = { text: "I am a button" };




//state
var obj = { mood: 'great', hungry: false };
this.setState({ hungry: true });
obj = { mood: 'great', hungry: true };



//this.mehtodName.bind. 
/* Due to the way that event handlers are bound in JavaScript */
class My extends React.Component {
    constructor(props) { this.toggleMood = this.toggleMood.bind(this); }
}



//color picker
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: [23, 111, 222] };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    }
    handleClick() {
        this.setState({ color: this.chooseColor() });
    }
    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                    Your color is {this.formatColor(this.state.color)}
                </h1>
                <Button light={this.isLight()} onClick={this.handleClick} />
            </div>
        );
    }
}

ReactDOM.render(
    <Random />,
    document.getElementById('app')
);


import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.light ? 'light-button' : 'dark-button'}
                onClick={this.props.onClick}
            >
                Refresh
			</button>
        );
    }
}
