var models = require('../models');

module.exports = {
  get: function (req, res) {
    // get request wants to retrieve data.




    models.messages.getAll((err, data) => { // ERROR FIRST CALLBACK FUNCTION
      if (err) {
        res.send(err); // NOT TOO SURE IF THIS IS RIGHT
      } else {
        // res.send(data); // trying to see format of data
        // console.log('data: ', JSON.stringify(data));
        console.log(data); // this is an
        res.json(data); // why not res.send() or res.end()
        // https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
      }
    });






  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
