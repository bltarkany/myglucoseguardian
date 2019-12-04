// require path to env -- prevent conflicts with react env
require("dotenv").config({ path: '../../../.env' });
// import keys file
const keys = require('../../keys.jsx');
const axios = require('axios');


let appId = keys.appId;
let appKey = keys.appKey;


module.exports = {
    // grab food list search
    getFood: function(search) {
        let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${search}`;

        return axios.get(url, {
            headers: {
                'x-app-id': `${appId}`,
                'x-app-key': `${appKey}`,
                'x-remote-user-id': '0',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                branded: true,
                common: false
            }
        }).then((res) => {
            return res.data.branded;
        })
    },
    // grab food item info
    getItem: function(id) {
        let url = `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${id}`;

        return axios.get(url, {
            headers: {
                'x-app-id': `${appId}`,
                'x-app-key': `${appKey}`,
                'x-remote-user-id': '0',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            return res.data.foods;
        })
    },
    
    getUser: function(id) {
        console.log(id + " has entered API call");
        console.log(axios.get("/api/user/" + id));
        return axios.get("/api/user/" + id)
    },
    
    getGlucoseLogCharts: function(glucoseID) {
        console.log(glucoseID + " has entered getGlucoseLogCharts API call");
        // console.log(axios.get("/api/GlucoseChart/" + glucoseID));
        return axios.get("/api/GlucoseChart/" + glucoseID);
    },


    getGlucoseInput: function(glucoseChartObject) {
        //holds the promises from each AXIOS call
        const promiseArray = [];

        console.log(
            glucoseChartObject + " has entered getGlucoseInput API call"
        );

        //does an AXIOS call for each logID the user has, then stores the results in promiseArray
        glucoseChartObject.forEach(Entry => {
            promiseArray.push(axios.get("/api/Glucose/" + Entry));
        });
        //return results
        return Promise.all(promiseArray).then(function(resolvedPromises) {
            console.log(
                "contents of promiseArray" + JSON.stringify(resolvedPromises)
            );
            console.log("========================================");
            console.log(resolvedPromises);
            return resolvedPromises;
        });
        // axios.get("/api/Glucose/" + glucoseInputID);
    }
 
}