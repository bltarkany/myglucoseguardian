import React, { Component } from "react";

class Food extends Component {
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