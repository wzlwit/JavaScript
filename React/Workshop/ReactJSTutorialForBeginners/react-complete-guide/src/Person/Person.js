import React from 'react';

const person = (props) => {//only rendering
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>{/* access its children for class, otherwise it will not show */}
            <input type='text' onChange={props.changed} defaultValue={props.name/* here, using 'value' will give an error, which make the input read-only */}></input>
        </div>
    );
}

export default person;