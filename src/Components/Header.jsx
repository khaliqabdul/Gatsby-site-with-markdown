import React from 'react';
import Layouts from './Layouts';

export default ({ text, subText }) => {
    return (
        <div>
            <h3>{text}</h3>
            <p>{subText}</p>
        </div>
    );
}