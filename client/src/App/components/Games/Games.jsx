import React from "react";

const Food = () => {
    return (
        <div className="container">
        <div className="row">

            {/* ROW */}
            <div className="col-lg-12">
                <h1>Games!</h1>

                {/* SPACING */}
                <hr style={{width: "100%", color: "light-grey", height: "1px", backgroundColor: "light-grey", marginTop: "40px", marginBottom: "40px"}}/>

            </div>

            {/* ROW */}
            <div className="col-lg-12">
                <div className="form-group">

                    {/* Game Options */}
                    <label for="games">Select Games</label>
                        <select class="form-control form-control-lg">
                        <option>Hang Man</option>
                        <option>Falppy Bird</option>
                        <option>Some other Game...</option>
                    </select>
                </div>
            </div>

            <div className="col-lg-12">
                {/* SUBMIT BUTTON */}
                <button type="submit" class="btn btn-primary">submit</button>
            </div>

        </div>
    </div>
    );
}

export default Food;
