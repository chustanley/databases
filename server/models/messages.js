var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.dbConnection.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    });


  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
