import React from 'react';
import img1 from '../img/events.png';

const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={ img1 } alt="image 1"/>
            </div>

        </div>
    )
}

export default Card;