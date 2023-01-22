
var Sequelize = require('Sequelize');

//This creates the connection!!! now we have functions that are tied to this specific connection
var sequelizeConnection = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//This is just testing to see if the connection is working properly.
try { //try statement allows you to define blocks of code to be tested for errors while
  sequelizeConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Tables that are going to be created for the SQL database (chat) that is defined in the connection
var User = sequelizeConnection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

  }
});


var Message = sequelizeConnection.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  roomname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});





//THIS syncs all the tables that were created above into the specified database in the connection section.
sequelizeConnection.sync().then(() => { // FORCE SYNC MAKES YOU RECREATE YOUR TABLES ALL OVER AGAIN
  console.log('Sequelize tables sucessfully created!');
}).catch((error) => {
  console.error('This aint working my brotha : ', error);
});


//When we export these tables into different JS files, referencing to it
module.exports = {
  'User': User,
  'Message': Message,
  'Connection': sequelizeConnection
};

// var Sequelize = require('sequelize');

// var db = new Sequelize('chat', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// try { //try statement allws you to define blocks of code to be tested for errors while
//   db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }



// var User = db.define('users', {
//   username: Sequelize.STRING
// });

// var Message = db.define('messages', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });