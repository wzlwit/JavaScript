import React from 'react';

const person = (props) => {//only rendering
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>{/* access its children for class, otherwise it will not show */}
        </div>
    );
}

export default person;