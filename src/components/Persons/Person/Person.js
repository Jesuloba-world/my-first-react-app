import React, { Component } from 'react';

import classes from './Person.css';

/* const person = (props) => {
    console.log("[person.js] rendering...");

    return (
        <div className={classes.Person}>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>

            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click} >X</button>
        </div>
    ); 
};

export default person;
*/

class Person extends Component {



    render() {
        console.log("[person.js] rendering...");

        return (
            <div className={classes.Person}>
                <p>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>

                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <button onClick={this.props.click} >X</button>
            </div>
        );
    }; 
}

export default Person;
