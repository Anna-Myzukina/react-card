import React from 'react';
import img1 from '../img/events.png';

const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={ img1 } alt="image 1"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    Project Name
                </h4>
                <p className="card-text text-secondary">
                    Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illum repellat, repudiandae a saepe fugit.
                </p>
                <a href="/" className="btn btn-outline-success">Preview</a>
            </div>
        </div>
    )
}

export default Card;