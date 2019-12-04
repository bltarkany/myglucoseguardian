// import {} from 'dotenv/config';
// import axios from 'axios';
// import keys from '../../keys.jsx';
// dotenv.config({ path: path.join(__dirname, '.env') });


// require path to env -- prevent conflicts with react env
require("dotenv").config({ path: '../../../.env' });
// import keys file
const keys = require('../../keys.jsx');
const axios = require('axios');


let appId = keys.appId;
let appKey = keys.appKey;

console.log(appId, appKey);

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
            console.log(res.data);
            res.json();
        })
        .catch((error) => {
            console.log(error);
        });
    },
    // grab food item info
    getItem: function(id) {
        let url = `https://trackapi.nutritionix.com/v2/search/item?query=${id}`;

        return axios.get(url, {
            headers: {
                'x-app-id': appId,
                'x-app-key': appKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
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

function get(search) {

        let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${search}`;

        axios.get(url, {
            headers: {
            'x-app-id': appId,
            'x-app-key': appKey,
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                branded: true,
                common: false
            }
        }).then((res) => {
            console.log(res.data);
            // res.json(data);
        }).catch((error) => {
            console.log(error);
        });

}

function getItem(id) {

    let url = `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${id}`;

    axios.get(url, {
        headers: {
            'x-app-id': appId,
            'x-app-key': appKey,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error);
    });
}


console.log(get("reduced fat feta cheese"));
console.log(getItem('5b90d1ad1a47f2ec0f72cf10'));