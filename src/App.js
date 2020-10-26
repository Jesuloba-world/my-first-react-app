import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id} 
                      changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler} > Toggle Persons
        </button>
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