import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';

import API from "../utils/API";


class Food extends Component {

    state = {
        search: "",
        foodList: [],
        itemId: 0,
        name: "",
        brand: "",
        servingSize: 0,
        servingQty: 0,
        servingGrams: 0,
        calories: 0,
        totalFat: 0,
        saturatedFat: 0,
        cholesterol: 0,
        carbs: 0,
        dietaryFiber: 0,
        sugars: 0,
        protein: 0,
        sodium: 0

    };

    foodSearch = () => {
        API.getFood(this.state.search)
         .then(res => {

         }).catch((err) => {

         })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



  render() {
    return (
        <div className="container">
            <div className="row">

                {/* Header */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Food Calculation</h1>
                    {/* Spacing */}
                <hr style={{width: "100%", color: "light-grey", height: "1px", backgroundColor: "light-grey", marginTop: "40px", marginBottom: "40px"}}/>
                </div>

                {/* ROW */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                        {/* CALORIES */}
                        <label for="calories">Calories</label>
                        <input type="number" className="form-control" id="calories"/>
                        <small id="" className="form-text text-muted">Amount of Calories</small>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-goup">
                        {/* CARBS */}
                        <label for="carbs">Carbohydrates</label>
                        <input type="number" className="form-control" id="carbs"/>
                        <small id="" className="form-text text-muted">Amount of Carbohydrates in Grams</small>
                    </div>
                </div>

                {/* ROW */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                        {/* FATS */}
                        <label for="fat">Fats</label>
                        <input type="number" className="form-control" id="fat"/>
                        <small id="" className="form-text text-muted">Amount of Fat in Grams</small>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                        {/* PROTEIN */}
                        <label for="Protein">Protein</label>
                        <input type="number" className="form-control" id="protein"/>
                        <small id="" className="form-text text-muted">Amount of Protein in Grams</small>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </div>
        </div>
    );
  }
}

export default Food;