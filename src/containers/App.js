import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {

  constructor(props) {
    super(props)
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "dcbc6", name: "Max", age: 28 },
      { id: "scwy2", name: "John", age: 20 },
      { id: "sc456", name: "Jane", age: 19 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

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

    this.setState((prevState, props) => { 
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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
  
  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons}
            delete = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} 
            isAuthenticated = {this.state.authenticated}
          />
    }

    return (
        <Aux>
          <button onClick={() => {
            this.setState( (prevState, props) => {
              return { 
                showCockpit: !(prevState.showCockpit) 
              }
            })  
          }} >Toggle Cockpit</button>
          
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} >
            {this.state.showCockpit ? (
              <Cockpit 
                title = {this.props.appTitle}
                showPerson = {this.state.showPersons}
                personsLength = {this.state.persons.length}
                toggle = {this.togglePersonsHandler}
              /> ) : null
            }
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }


}

export default withClass(App, classes.App);

