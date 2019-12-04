import React from 'react';
import './Card.css';

const CardBody = (props) => {
    
    props = props.obj;
    
    return (
        <div className="card-body">
            <ul>
                <li>
                    <strong>Serving Size:</strong> {props.serving_qty} {props.serving_unit} ({props.serving_weight_grams} grams)
                </li>
                <li>
                    <strong>Calories:</strong> {props.nf_calories}
                </li>
                <li>
                    <strong>Total Fat:</strong> {props.nf_total_fat} g
                </li>
                <li>
                    <strong>Saturated Fat:</strong> {props.nf_saturated_fat} g
                </li>
                <li>
                    <strong>Carbohydrates:</strong> {props.nf_total_carbohydrate} g
                    <ul className="tab">
                        <li>
                            <strong>Sugars:</strong> {props.nf_sugars} g
                        </li>
                        <li>
                            <strong>Dietary Fiber:</strong> {props.nf_dietary_fiber} g
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Protein:</strong> {props.nf_protein} g
                </li>
                <li>
                    <strong>Sodium:</strong> {props.nf_sodium} mg
                </li>
            </ul>
        </div>
    );
}

export default CardBody;