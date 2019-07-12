const db = require("../models");

// Defining methods for the deviceController
module.exports = {
  findAll: function(req, res) {
    db.Device
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Device
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

    console.log(req.body);

    db.Device
      .create({MAC: req.body.MAC})
      .then( (dbModel) => {
        
        console.log(dbModel._id);

        db.User
          .updateOne({email: req.body.email}, {$push: {deviceList: dbModel._id}})
          .then( (dbModel) =>{
            console.log(dbModel);
          });

        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Device
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Device
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
