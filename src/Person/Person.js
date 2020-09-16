import React from 'react';
import './Person.css'

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
            <button className="button-delete" onClick={props.delete}> Delete Persons </button>
        </div>
    )
};

export default person;