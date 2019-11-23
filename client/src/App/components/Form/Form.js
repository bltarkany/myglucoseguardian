import React from 'react';
import "./Form.css";

export function Heading() {
    return (
        <div>
            {/* Heading */}
            <h1>Food Calculations and Carb Tracking</h1>
            {/* Spacing */}
            <hr/>
        </div>
    );
}

export function Input(props) {
    return (
        <div className="form-group">
        {/* CALORIES */}
        <label for="calories"></label>
        <input type="number" className="form-control" id="calories"/>
        <small id="" className="form-text text-muted">Amount of Calories</small>
    </div>
    );
}