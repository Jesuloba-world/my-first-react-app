import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "John", age: 20 },
      { name: "Jane", age: 19 }
    ]
  };

  switchNameHandler = () => {
    // console.log('Was Clicked');
    // WON'T WORK: this.state.persons[0].name = "Maximilian";

    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "John", age: 21 },
        { name: "Jane", age: 20 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Playing games</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
