// require path to env -- prevent conflicts with react env
require("dotenv").config({ path: "../../../.env" });
// import keys file
const keys = require("../../keys.jsx");
const axios = require("axios");

let appId = keys.appId;
let appKey = keys.appKey;

module.exports = {
    // grab food list search
    getFood: function(search) {
        let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${search}`;

        return axios
            .get(url, {
                headers: {
                    "x-app-id": `${appId}`,
                    "x-app-key": `${appKey}`,
                    "x-remote-user-id": "0",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    branded: true,
                    common: false
                }
            })
            .then(res => {
                return res.data.branded;
            });
    },
    // grab food item info
    getItem: function(id) {
        let url = `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${id}`;

        return axios
            .get(url, {
                headers: {
                    "x-app-id": `${appId}`,
                    "x-app-key": `${appKey}`,
                    "x-remote-user-id": "0",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                return res.data.foods;
            });
    },

    getUser: function(id) {
        console.log(id + " has entered API call");
        console.log(axios.get("/api/user/" + id));
        return axios.get("/api/user/" + id);
    },

    loadUserLogs: function(glucoseUserID, dateString) {
        let apistring = "/api/Glucose/" + glucoseUserID + "/" + dateString;
        // console.log("Loading user info " + glucoseUserID);
        // console.log("For this day " + dateString);
        // console.log("/api/Glucose/" + glucoseUserID + "/" + dateString);
        // console.log("/api/Glucose/5dce30121735bc0d420a4b42/2019-11-01");
        // console.log(apistring);
        // axios.get(apistring).then();
        // console.log("HardCoded API Call");
        // console.log(
        //     axios.get("/api/Glucose/5dce30121735bc0d420a4b42/2019-11-01")
        // );
        return axios.get(apistring);
    },

    getGlucoseInput: function(glucoseID) {
        console.log(glucoseID + " has entered getGlucoseLogCharts API call");
        // console.log(axios.get("/api/GlucoseChart/" + glucoseID));
        return axios.get("/api/Glucose/" + glucoseID);
    }
};
