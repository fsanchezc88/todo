import React from 'react';

import classes from './Person.module.css';

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p>Yo soy {props.name} y
                tengo {props.age} años de edad</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button type='button' onClick={props.click}>Eliminar</button>
        </div>
    );
}

export default Person;
