import React from 'react';

const Display = (props) => {
    return(
        <div>
            <h3>Display</h3>
            <p>balls: {props.balls}</p>
            <p>strikes: {props.strikes}</p>
        </div>
    )
}

export default Display;