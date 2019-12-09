//glucose controller

const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Glucose
            .find(req.query)
            .sort({
                ObjectId: -1
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Glucose
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByAuthId: function (req, res) {
        db.Glucose
            .find({
                "auth0__id": req.params.id
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByAuthIdAndDate: function (req, res) {
        console.log(req.body);
        db.Glucose
            .find({
                "auth0__id": req.params.id,
                "dateCollected": req.params.date
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByAuthIdAndStartEndDate: function (req,res) {
        db.Glucose
        .find({
            "auth0__id": req.params.id,
            "dateCollected" :{ 
               $gte: req.params.start_Date,
               $lt:  req.params.end_Date
            } 
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createNewRecord: function (req, res) {
        db.Glucose
            .create({
                "glucoseLevel": req.body.glucoseLevel,
                "dateCollected": req.body.date,
                "timeCollected": req.body.time,
                "auth0__id": req.body.id
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Glucose
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Glucose
            .findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    aggregate: function (req, res) {
        console.log(req.body)
        db.Glucose.aggregate( 
            [ 
               { 
                  $match:{ 
                    "auth0__id" : req.body.id,
                     "dateCollected" :{ 
                        $gte: req.body.start_Date,
                        $lt:  req.body.end_Date
                     }
                  }
               },
               { 
                  $group:{ 
                     _id:"$auth0__id",
                     periodAvg:{ 
                        $avg:"$glucoseLevel"
                     },
                     periodTotal:{ 
                        $sum:"$glucoseLevel"
                     },
                     periodMin:{ 
                        $min:"$glucoseLevel"
                     },
                     periodMax:{ 
                        $max:"$glucoseLevel"
                     }
                  }
               },
               { 
                  $project:{ 
                     _id:"$_id",
                     periodAvg:"$periodAvg",
                     periodTotal:"$periodTotal",
                     periodMin:"$periodMin",
                     periodMax:"$periodMax",
                     auth0__id:"$_id"
                  }
               }
            ]
         )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Glucose
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
