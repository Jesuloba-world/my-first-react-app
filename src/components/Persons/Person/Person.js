import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';


class Person extends Component {



    render() {
        console.log("[person.js] rendering...");

        return (
            <Aux>
                <p>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>

                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <button onClick={this.props.click} >X</button>
            </Aux>
        );
    }; 
}

export default withClass(Person, classes.Person);
