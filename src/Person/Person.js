import React from 'react';
// import styled from 'styled-components';
import classes from './Person.css';

// import './Person.css'; 

// const StyledDiv = styled.div`
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding: 16px;
//         text-align: center;
//         position: relative;

//         & button {
//         position: absolute;
//         top: 10px;
//         right: 10px;
//         height: 20px;
//         width: 20px;
//         outline: none;
//         background-color: #eee;
//         border: none;
//         border-radius: 100%;
//         }

//         @media (min-width: 500px) {
//             width: 450px;
//         }
// `;

const person = (props) => {

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