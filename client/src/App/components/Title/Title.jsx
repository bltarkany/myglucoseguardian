import React from 'react';
import './Title.css';

export default function Title(props) {
    return (
        <div>
            <h1>{props}</h1>
            <hr/>
        </div>
    );
}