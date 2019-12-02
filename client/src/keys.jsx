// require path to env -- prevent conflicts with react env
require('dotenv').config({ path: '../.env' });


console.log('keys loaded');

module.exports = {
    appId: process.env.REACT_APP_APP_ID,
    appKey: process.env.REACT_APP_APP_KEY
};






