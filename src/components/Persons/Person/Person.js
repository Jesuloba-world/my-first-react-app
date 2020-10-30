import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount () {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[person.js] rendering...");

        return (
            <Aux>
                <p>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>

                <input 
                    //ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
                <button onClick={this.props.delete} >X</button>
            </Aux>
        );
    }; 
}

Person.propTypes = {
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    delete: PropTypes.func
}

export default withClass(Person, classes.Person);
