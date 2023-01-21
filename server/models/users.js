var db = require('../db');

module.exports = {
  getAll: function () {},
  create: function (callback, username) {

    var queryString = 'INSERT INTO users (username) VALUES (?)';
    var queryArgs = [username.username];



    db.dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    });
  }
};
