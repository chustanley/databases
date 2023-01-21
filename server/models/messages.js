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
  create: function (callback, messageObject) {
    var queryString = 'INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?)';

    var queryArgs = [messageObject.username, messageObject.text, messageObject.roomname];

    console.log('HELELOOFDFJSDIAHFDIFHIOFGHFHJFIOP', queryArgs);

    db.dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    });

  } // a function which can be used to insert a message into the database
};
