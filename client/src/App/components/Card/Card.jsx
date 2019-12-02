import React from 'react';
import './Card.css';

const CardBody = (props) => {
    return (
        <div className="card-body">
            <ul>
                <li>
                    <strong>Serving Size:</strong> {props.servingSize} {props.servingUnit} ({props.servingGrams} grams)
                </li>
                <li>
                    <strong>Calories:</strong> {props.calories}
                </li>
                <li>
                    <strong>Total Fat:</strong> {props.totalFat} g
                </li>
                <li>
                    <strong>Saturated Fat:</strong> {props.saturatedFat} g
                </li>
                <li>
                    <strong>Carbohydrates:</strong> {props.carbs} g
                    <ul className="tab">
                        <li>
                            <strong>Sugars:</strong> {props.sugars} g
                        </li>
                        <li>
                            <strong>Dietary Fiber:</strong> {props.dietaryFiber} g
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Protein:</strong> {props.protein} g
                </li>
                <li>
                    <strong>Sodium:</strong> {props.sodium} mg
                </li>
            </ul>
        </div>
    );
}

export default CardBody;