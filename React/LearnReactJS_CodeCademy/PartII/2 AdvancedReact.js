//inline style
const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred', fontSzie: 50 }}>Please style me!</h1>;

const blue = 'rgb(139, 157, 195)';
const styles = {
    color: blue,
    background: 'mintcream'
};
<h1 style={styles}>Hello world</h1>


/* 
separate presentational components from display components
image loop 
*/

//GuineaPigs.js -- presentatonal component
import React from 'react';

const GUINEAPATHS = [
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component {

    render() {
        const src = this.props.src;
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src} />
            </div>
        );
    }
}

//GuineaPigsContainer.js
import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs';

const GUINEAPATHS = [
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentGP: 0 };
        this.interval = null;
        this.nextGP = this.nextGP.bind(this);
    }

    nextGP() {
        let current = this.state.currentGP;
        let next = ++current % GUINEAPATHS.length;
        this.setState({ currentGP: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextGP, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const src = GUINEAPATHS[this.state.currentGP];
        return <GuineaPigs src={src} />;
    }

}

ReactDOM.render(<GuineaPigsContainer />, document.getElementById('app'));


/* Stateless Functional Components */
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}
// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
}
// Works the same either way:
ReactDOM.render(<MyComponentClass />, document.getElementById('app')
);


//pass props for Stateless Functional Compoents (customarily naming as props);
import React from 'react';

export const GuineaPigs = (props) => {// props can be changed to any other name
    return (
        <div>
            <h1>Cute Guinea Pigs</h1>
            <img src={props.src} />
        </div>
    );

}

//another way for statelss functional component
function MyClass (props){
    render(
        <h1>hello, {props.name}</h1>
    )
}




/* propTypes */
Runner.propTypes = {
    message: React.PropTypes.string.isRequired,
    style: React.PropTypes.object.isRequired,
    isMetric: React.PropTypes.bool.isRequired,
    miles: React.PropTypes.number.isRequired,
    milesToKM: React.PropTypes.func.isRequired,
    races: React.PropTypes.array.isRequired
};

/* example: */
//Runner.js
import React from 'react';

export class Runner extends React.Component {
    render() {
        let miles = this.props.miles;
        let km = this.props.milesToKM(miles);
        let races = this.props.races.map(function (race, i) {
            return <li key={race + i}>{race}</li>;
        });

        return (
            <div style={this.props.style}>
                <h1>{this.props.message}</h1>
                {this.props.isMetric &&
                    <h2>One Time I Ran {km} Kilometers!</h2>}
                {!this.props.isMetric &&
                    <h2>One Time I Ran {miles} Miles!</h2>}
                <h3>Races I've Run</h3>
                <ul id="races">{races}</ul>
            </div>
        );
    }
}

Runner.propTypes = {
    message: React.PropTypes.string.isRequired,
    style: React.PropTypes.object.isRequired,
    isMetric: React.PropTypes.bool.isRequired,
    miles: React.PropTypes.number.isRequired,
    milesToKM: React.PropTypes.func.isRequired,
    races: React.PropTypes.array.isRequired
};

//BestSeller.js
import React from 'react';

export class BestSeller extends React.Component {
    render() {
        return (
            <li>
                Title: <span>
                    {this.props.title}
                </span><br />

                Author: <span>
                    {this.props.author}
                </span><br />

                Weeks: <span>
                    {this.props.weeksOnList}
                </span>
            </li>
        );
    }
}

BestSeller.propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    weeksOnList: React.PropTypes.number.isRequired,
};

//BookList.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
    render() {
        return (
            <div>
                <h1>Best Sellers</h1>
                <div>
                    <ol>
                        <BestSeller
                            title="Glory and War Stuff for Dads"
                            author="Sir Eldrich Van Hoorsgaard"
                            weeksOnList={10} />
                        <BestSeller
                            title="The Crime Criminals!"
                            author="Brenda Sqrentun"
                            weeksOnList={2} />
                        <BestSeller
                            title="Subprime Lending For Punk Rockers"
                            author="Malcolm McLaren"
                            weeksOnList={600} />
                    </ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BookList />, document.getElementById('app'));

//image show for GuineaPigs
import React from 'react';

export class GuineaPigs extends React.Component {
    render() {
        let src = this.props.src;
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src} />
            </div>
        );
    }
}

GuineaPigs.propTypes = {
    src: React.PropTypes.string.isRequired
}

//update an input's value
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '' };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({ userInput: e.target.value })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);