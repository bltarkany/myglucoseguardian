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
    createFood: function(obj){
        // console.log("grabbed food", obj)
        return axios.post("api/food/", obj)
    },
    createUser: function(obj) {
        // console.log("grabbed obj",  obj);
        return axios.post("/api/user/", obj);
    },

    updateUser: function(obj) {
        // console.log("grabbed user id from object", obj.id);
        let body = {
            first_name: obj.first_name,
            last_name: obj.last_name,
            email: obj.email,
            gender: obj.gender,
            dob: obj.dob,
            height: obj.height,
            weight: obj.weight,
            diabetes_type: obj.diabetes_type
        };
        // console.log(body)
        return axios.put("api/user/" + obj.id, body);
    },

    getUser: function(id) {
        // console.log(id + " has entered API call");
        // console.log(axios.get("/api/user/" + id));
        return axios.get("/api/user/" + id);
    },

    loadUserLogs: function(glucoseUserID, dateString) {
        let apiString = "/api/Glucose/" + glucoseUserID + "/" + dateString;
        axios.get(apiString)
            .then(res => {
                console.log(res.data);
            })
        return axios.get(apiString);
    },

    getGlucoseInput: function(glucoseID) {
        console.log(glucoseID + " has entered getGlucoseLogCharts API call");
        // console.log(axios.get("/api/GlucoseChart/" + glucoseID));
        return axios.get("/api/Glucose/" + glucoseID);
    },

    submitNewGlucoseLog: function(glucoseUserID, glucoseLevel,dateString,timeString){
        // %3A is ASCII for ':' which is not thrown into the URL (colons usually reserved for port definitions)
        let cleanTimeString = timeString.replace(":", "%3A")
        let apiString = "/api/Glucose/" + glucoseUserID + "/" + glucoseLevel + "/" + dateString + "/" + cleanTimeString;
        console.log(glucoseUserID + " has entered getGlucoseLogCharts API call");
        console.log(apiString) 
        return axios.post(apiString);
    }
};
