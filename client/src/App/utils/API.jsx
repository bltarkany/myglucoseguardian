//api

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
        let body = {
            meal: obj.meal,
            mealTime: obj.mealTime,
            calories: obj.calories,
            fats: obj.fats,
            carbs: obj.carbs,
            sugar: obj.sugar,
            dietFiber: obj.dietFiber,
            proteins: obj.proteins,
            auth0_id: obj.id
        }
        return axios.post("/api/food/", body);
    },

    // grab food logs for summary
    foodLogs: function(obj) {
        return axios.get(`/api/food/${obj.id}/${obj.date}`);
    },

    createUser: function(obj) {
        return axios.post("/api/user/", obj);
    },
    updateUser: function(obj) {
        
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
        return axios.put("/api/user/" + obj.id, body);
    },

    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },

    getLogsForSingleDate: function(obj) {
        return axios.get(`/api/glucose/${obj.id}/${obj.date}`);
    },

    //see if I can factor this into glucose pages call
    getLogsForDateRange: function(obj){
        let body = {
            id : obj.id,
            start_Date : obj.start_Date,
            end_Date : obj.end_Date
        }
        console.log('package recieved', body);
        return axios.get(`/api/glucose/${body.id}/${body.start_Date}/${body.end_Date}/`)
    },

    getAggregatedDataForDateRange: function(obj){
        let body = {
            id : obj.id,
            start_Date : obj.start_Date,
            end_Date : obj.end_Date
        }
        console.log('package recieved', body);
        return axios.post("/api/glucose/aggregate/", body)
    },

    submitNewGlucoseLog: function(obj){
        let body = {
            id: obj.id,
            date: obj.date,
            time: obj.time,
            glucoseLevel: obj.glucoseLevel
        }
       
        return axios.post("/api/glucose/levels", body);
    }
};
