import React from 'react';

function Card(props) {
    return (

        <div className="Card">
            <p>{props.price}</p>
            <p><strong>{props.name}</strong></p>
            <p><small>{props.stocked}</small></p>
            <p>{props.category}</p>
        </div>

    );
}

export default Card;