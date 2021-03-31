import React from 'react';
import './style.css';

const DevContact = ({
    devImg,
    devName,
}) => (
    <div className="container">
        <img className="img" src={devImg}></img>
        <div className="name">{devName}</div>
    </div>
);

export default DevContact;
