import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  /*   constructor(props){
      super(props);
      this.switchNameHandler=this.switchNameHandler.bind(this);
    } */

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8
    };
    return (

      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        {/*  <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> // .bind() like .call()*/}
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maxillian')}
        >Switch Name</button>
        {/*pass an inline anonymous function;
        this way is easy to pass an argument*/}

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >My hobbies: Racing!</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Hi, I\'m a React App!!!'));
  }
}

export default App;
