require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

console.log("---------- POPULATING ----------");
db.User
    .find({})
    .populate({
        path: 'foodLogs',
        populate: {
            path: 'Food'
        }
    }).then(res=>console.log(res))
    .catch(error=>console.error(error));
    // .then((err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     res.forEach(content => {
    //         console.log(content);
    //         });
    //         process.exit(0);
    // });