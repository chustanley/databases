var models = require('../models');

var { Message } = require('../db/index');
// comes with the sequelize functions
// targets specific property in the module.exports object in the sequelize.js page
// we are retrieving 'message' from module.exports = {}

module.exports = {
  get: function (req, res) {
    // models.messages.getAll((err, data) => { // ERROR FIRST CALLBACK FUNCTION
    //   if (err) {
    //     res.send(err); // NOT TOO SURE IF THIS IS RIGHT
    //   } else {
    //     // res.send(data); // trying to see format of data
    //     // console.log('data: ', JSON.stringify(data));
    //     console.log('xxxxx', typeof data); // this is an
    //     res.json(data); // why not res.send() or res.end()
    //     // https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
    //   }
    // });

    Message.findAll()
      .then(function(data) {
        res.send(data); // sends it back to the API call // parse.js
      })
      .catch(function(err) {
        console.log('An error has occured in messages.get.findall', err);
      });




  },
  post: function (req, res) {


    //   models.messages.create((err, data) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       res.send(data);
    //     }
    //   }, req.body);
    // } // a function which handles posting a message to the database




    Message.create(req.body)
      .then(function(data) {
        res.send(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
