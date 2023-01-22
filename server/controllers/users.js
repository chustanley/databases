var models = require('../models');
var { User } = require('../db/index');



module.exports = { // we dont even use the get function lmfao
  get: function (req, res) {

    User.findAll()
      .then(function(data) {
        console.log('###########', data);
        res.send(data);
      })
      .catch(function(err) {
        console.log('Error has occured when trying to endpoint: /user HTTP: get', err);
      });

  },
  post: function (req, res) {

    console.log(User);

    User.create(req.body)
      .then (function(data) {
        res.send(data);
      })
      .catch(function(err) {
        console.log('Error has occured when trying to endpoint: /user HTTP: post', err);
      });

  },
};
