/* statefull component */

//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Frarthur' };
        this.changeName = this.changeName.bind(this);
    }
    changeName(newName) {
        this.setState({ name: newName });
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />;
    }
}
ReactDOM.render(<Parent />, document.getElementById('app'));

//Child.js
import React from 'react';

export class Child extends React.Component {
    render() {
        return <h1>Hey, my name is {this.props.name}</h1>;
    }
}



/* Child Components Update Their Parents' state -- PATTERN */

//Child.js
import React from 'react';

export class Child extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value; //the targe is <select>
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <h1>Hey my name is {this.props.name}!</h1>
                <select id="great-names" onChange={this.handleChange}>;
                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}

//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };
    }

    render() {
        return <Child name={this.state.name} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);



/* Child Components Update Sibling Components -- PATTERN 
 A child component updates its parent's state, and the parent passes that state to a sibling component.
*/

//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

//Child.js
import React from 'react';

export class Child extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <select
                    id="great-names"
                    onChange={this.handleChange}>

                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}

//Sibling.js
import React from 'react';

export class Sibling extends React.Component {

    render() {
        let name = this.props.name;

        return (
            <div>
                <h1>Hey, my name is {name}!</h1>
                <h2>Don't you think {name} is the prettiest name ever?</h2>
                <h2>Sure am glad that my parents picked {name}!</h2>
            </div>
        );
    }
}


/* Video Player */
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: VIDEOS.fast };
        this.chooseVideo = this.chooseVideo.bind(this);
    }
    chooseVideo(newVideo) {
        this.setState({ src: VIDEOS[newVideo] });
    }


    render() {
        return (
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={this.chooseVideo} />
                <Video src={this.state.src} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//Menu.js
import React from 'react';

export class Menu extends React.Component {
    render() {
        return (
            <form onClick={this.props.chooseVideo}>
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
        );
    }
}

//Video.js
import React from 'react';

export class Video extends React.Component {
    render() {
        return (
            <div>
                <video controls autostart autoplay src={this.props.src} />
            </div>
        );
    }
}

//Menu.js
import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const text = e.target.value;
        this.props.chooseVideo(text);
    }
    render() {
        return (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
        );
    }
}