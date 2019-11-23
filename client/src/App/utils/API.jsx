// require path to env -- prevent conflicts with react env
require("dotenv").config({ path: '../../../.env' });
// import keys file
const keys = require('../../keys');
const axios = require('axios');


let appId = keys.appId;
let appKey = keys.appKey;

module.exports = {
    // grab food list search
    getFood: function (search) {

        let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${search}`;

        return axios.get(url, {
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
            // res.json();
        }).catch((error) => {
            console.log(error);
        });
    },
    // grab food item info
    getItem: function (id) {
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
    
    getUser: function (id) {
        return axios.get("/api/user/" + id)
    }
 
}

// function get(search) {

//         let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${search}`;

//         axios.get(url, {
//             headers: {
//             'x-app-id': appId,
//             'x-app-key': appKey,
//             'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             params: {
//                 branded: true,
//                 common: false
//             }
//         }).then((res) => {
//             console.log(res.data);
//             // res.json(data);
//         }).catch((error) => {
//             console.log(error);
//         });

// }

// function getItem(id) {

//     let url = `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${id}`;

//     axios.get(url, {
//         headers: {
//             'x-app-id': appId,
//             'x-app-key': appKey,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }).then((res) => {
//         console.log(res.data);
//     }).catch((error) => {
//         console.log(error);
//     });
// }


// console.log(get("reduced fat feta cheese"));
// console.log(getItem('5b90d1ad1a47f2ec0f72cf10'));