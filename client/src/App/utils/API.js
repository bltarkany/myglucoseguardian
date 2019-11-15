import axios from 'axios';
// import { ESRCH } from 'constants';

export default {
    // grab item search
    getFood: function (search) {
        let query = search;
        let url = `https://api.nutritionix.com/v1_1/search/${query}`;

        axios({
            method: "GET",
            baseURL: 'https://api.nutritionix.com/v1_1/search/',
            url: search,
            headers: {
                "content-type": "application/json",
                "appId": `${process.env.APP_ID}`,
                "appKey": `${process.env.APP_KEY}`,
                "filters": {
                    "item_type": 2
                }
            },
            params: {
                fields: "brand_name,item_name,brand_id,item_id,upc,item_type,item_description,nf_ingredients_statement,nf_calories,nf_calories_from_fat,nf_total_fat,nf_saturated_fat,nf_monounsaturated_fat,nf_polyunsaturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_potassium,nf_serving_size_qty,nf_serving_size_unit,nf_serving_weight_grams,metric_qty,metric_uom"
            }
        }).then((res) => {
            console.log(res);
            res.json();
        }).catch((error) => {
            console.log(error);
        });
    }

}