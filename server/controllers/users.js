var models = require('../models');

module.exports = {
  get: function (req, res) {
    // when name is clicked, only show messages on chatterbox from that user
  },
  post: function (req, res) {
    console.log(req.body); // this is the object

    models.users.create((err, data) => {
      if (err) {
        res.send(err);
        // throw err;
      } else {
        console.log('does this send');
        res.send(data);
      }
    }, req.body);
  }
};
