import React, { Component } from 'react';
// import styled from 'styled-components';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


// const StyledButton = styled.button`
//   background-color: ${(props) => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   transition: all .2s;

//   &:hover {
//     background-color: ${(props) => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {

  state = {
    persons: [
      { id: "dcbc6", name: "Max", age: 28 },
      { id: "scwy2", name: "John", age: 20 },
      { id: "sc456", name: "Jane", age: 19 }
    ],
    showPersons: false
  };

  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons}
            delete = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} 
          />
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title = {this.props.appTitle}
            showPerson = {this.state.showPersons}
            persons = {this.state.persons}
            toggle = {this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;


/* <Person 
name={this.state.persons[0].name} 
age={this.state.persons[0].age} />
<Person 
name={this.state.persons[1].name} 
age={this.state.persons[1].age} 
click={this.switchNameHandler.bind(this, 'Max!')} 
changed = {this.nameChangedHandler} >My Hobbies: Playing games</Person>
<Person 
name={this.state.persons[2].name} 
age={this.state.persons[2].age} /> */