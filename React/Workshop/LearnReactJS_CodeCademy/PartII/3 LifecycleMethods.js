/*mount, update, unmount*/

//mounting lifecycle methods: componentWillMount, render, componentDidMount
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
    componentWillMount() {
        alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
    }

    componentDidMount() {
        alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
    }

    render() {
        alert('Flashy is rendering!');
        return (
            <h1 style={{ color: this.props.color }}>
                OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
        );
    }
}

ReactDOM.render(
    <Flashy color='red' />,
    document.getElementById('app')
);

setTimeout(() => {
    ReactDOM.render(
        <Flashy color='green' />,
        document.getElementById('app')
    );
}, 2000);

//Updating Lifecycle Methods:
/* 
    componentWillReceiveProps
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
 */

//game example:
//TopNumber.js
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 'highest': 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.number > this.state.highest) {
            this.setState({
                highest: nextProps.number
            });
        }
    }
    componentWillUpdate() {
        if (document.body.style.background != yellow
            && this.state.highest >= 950 * 1000) {
            document.body.style.background = yellow;
        }
    }
    render() {
        return (
            <h1>
                Top Number: {this.state.highest}
            </h1>
        );
    }
}

TopNumber.propTypes = {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
};

//Target.js
import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.number != nextProps.number;
    }
    render() {
        let visibility = this.props.number ? 'visible' : 'hidden';
        let style = {
            position: 'absolute',
            left: random(0, 100) + '%',
            top: random(0, 100) + '%',
            fontSize: 40,
            cursor: 'pointer',
            visibility: visibility
        };

        return (
            <span style={style} className="target">
                {this.props.number}
            </span>
        )
    }
}

Target.propTypes = {
    number: React.PropTypes.number.isRequired
};

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
    position: 'absolute',
    width: 250,
    bottom: 60,
    left: 10,
    height: '60%',
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game: false,
            targets: {},
            latestClick: 0
        };

        this.intervals = null;

        this.hitTarget = this.hitTarget.bind(this);
        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    createTarget(key, ms) {
        ms = ms || random(500, 2000);
        this.intervals.push(setInterval(function () {
            let targets = clone(this.state.targets);
            let num = random(1, 1000 * 1000);
            targets[key] = targets[key] != 0 ? 0 : num;
            this.setState({ targets: targets });
        }.bind(this), ms));
    }

    hitTarget(e) {
        if (e.target.className != 'target') return;
        let num = parseInt(e.target.innerText);
        for (let target in this.state.targets) {
            let key = Math.random().toFixed(4);
            this.createTarget(key);
        }
        this.setState({ latestClick: num });
    }

    startGame() {
        this.createTarget('first', 750);
        this.setState({
            game: true
        });
    }

    endGame() {
        this.intervals.forEach((int) => {
            clearInterval(int);
        });
        this.intervals = [];
        this.setState({
            game: false,
            targets: {},
            latestClick: 0
        });
    }

    componentWillMount() {
        this.intervals = [];
    }

    render() {
        let buttonStyle = {
            display: this.state.game ? 'none' : 'inline-block'
        };
        let targets = [];
        for (let key in this.state.targets) {
            targets.push(
                <Target
                    number={this.state.targets[key]}
                    key={key} />
            );
        }
        return (
            <div>
                <TopNumber number={this.state.latestClick} game={this.state.game} />
                <Display number={this.state.latestClick} />
                <button onClick={this.startGame} style={buttonStyle}>
                    New Game
        </button>
                <div style={fieldStyle} onClick={this.hitTarget}>
                    {targets}
                </div>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.latestClick < prevState.latestClick) {
            this.endGame();
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

/* unmount: Adding Exclamation */
//Enthused.js
import React from 'react';

export class Enthused extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.addText('!');
        }, 15);
    }

    render() {
        return (
            <button onClick={this.props.toggle}>
                Stop!
      </button>
        );
    }
    componentWillUnmount(prevProps, prevState) {
        clearInterval(this.interval);
    }
}

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './Enthused';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enthused: false,
            text: ''
        };

        this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
        this.addText = this.addText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEnthusiasm() {
        this.setState({
            enthused: !this.state.enthused
        });
    }

    setText(text) {
        this.setState({ text: text });
    }

    addText(newText) {
        let text = this.state.text + newText;
        this.setState({ text: text });
    }

    handleChange(e) {
        this.setText(e.target.value);
    }

    render() {
        let button;
        if (this.state.enthused) {
            button = (
                <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
            );
        } else {
            button = (
                <button onClick={this.toggleEnthusiasm}>
                    Add Enthusiasm!
        </button>
            );
        }

        return (
            <div>
                <h1>Auto-Enthusiasm</h1>
                <textarea rows="7" cols="40" value={this.state.text}
                    onChange={this.handleChange}>
                </textarea>
                {button}
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

