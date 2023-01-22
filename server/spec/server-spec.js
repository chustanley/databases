/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql2'); //GETTING THE CLIENT;
const axios = require('axios');

const API_URL = 'http://127.0.0.1:3000/classes';

describe('Persistent Node Chat Server', () => {
  const dbConnection = mysql.createConnection({ // WHAT DOES THIS DO? = CREATING CONNECTION TO DATABASE?
    user: 'root', //default user
    password: '',
    database: 'chat',
  });

  beforeAll((done) => {
    dbConnection.connect((err) => {
      if (err) {
        throw err;
      } else {
        console.log('Connected!');
      }
    });

    const tablename = 'messages'; // TODO: fill this out

    /* Empty the db table before all tests so that multiple tests
     * (or repeated runs of the tests)  will not fail when they should be passing
     * or vice versa */


    dbConnection.query(`truncate ${tablename}`, done);
  }, 6500);

  afterAll(() => {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', (done) => {
    const username = 'Valjean';
    const text = 'In mercy\'s name, three days is all I need.';
    const roomname = 'Lobby';
    // Create a user on the chat server database.
    axios.post(`${API_URL}/users`, {'username': username})
      .then(() => {
        // Post a message to the node chat server:
        console.log('ARE WE OKAY!!!!');
        return axios.post(`${API_URL}/messages`, {'username': username, 'text': text, 'roomname': roomname});
      })
      .then((data) => {

        var parsedData = JSON.parse(data.config.data);
        // console.log('WE HERE BABY', typeof JSON.parse(data.config.data));

        // Now if we look in the database, we should find the posted message there.

        /* TODO: You might have to change this test to get all the data from
         * your message table, since this is schema-dependent. */
        const queryString = 'SELECT * FROM messages';
        const queryArgs = [];

        dbConnection.query(queryString, queryArgs, (err, results) => {

          if (err) {
            throw err;
          }
          // Should have one result:
          expect(results.length).toEqual(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).toEqual(parsedData.text);
          done();
        });
      })
      .catch((err) => {
        throw err;
      });
  });

  it('Should output all messages from the DB', (done) => {
    // Let's insert a message into the db

    // using placeholders, we can adjust to making this work.
    const queryString = 'INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?)';


    //'INSERT INTO messages (message) VALUES (\'nick mannnn\')';  <- working solution if you remove query args variable and argument


    const queryArgs = ['good morning nickkkkk', 'Lobby', 'dinosaur'];
    /* TODO: The exact query string and query args to use here
     * depend on the schema you design, so I'll leave them up to you. */
    dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        console.log('hi am i invoked');
        throw err;
      }


      // Now query the Node chat server and see if it returns the message we just inserted:

      axios.get(`${API_URL}/messages`)
        .then((response) => {

          const messageLog = response.data;
          console.log(messageLog);
          console.log(messageLog.length);


          expect(messageLog[1].text).toEqual(queryArgs[0]);
          // console.log('MESSAGE', message);
          expect(messageLog[1].roomname).toEqual(queryArgs[1]);
          // console.log('ROOMNAME', roomname);
          expect(messageLog.length).toEqual(2); // this test has only added 2 messages so far. This checks that the 2nd message sucessfully added
          expect(messageLog[0].id).toEqual(1);
          expect(messageLog[1].id).toEqual(2); // checking if the auto increment is working.

          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  it('All stored messages in the database should be auto-incremented', (done) => {

    const queryString = 'INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?)';
    const queryArgs = ['Is this auto-incrementing', 'Lobby', 'TEST SUITE'];

    dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        throw err;
      }

      axios.get(`${API_URL}/messages`)
        .then((response) => {
          const messageLog = response.data;
          expect(messageLog.length).toEqual(3);
          expect(messageLog[0].id).toEqual(1);
          expect(messageLog[1].id).toEqual(2);
          expect(messageLog[2].id).toEqual(3);
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  it('All stored messages in the database should be auto-incremnted', (done) => {

    const queryString = 'INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?)';
    const queryArgs = ['Is this auto-incrementing', 'Lobby', 'TEST SUITE'];

    dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        throw err;
      }

      axios.get(`${API_URL}/messages`)
        .then((response) => {
          const messageLog = response.data;
          expect(messageLog[0].id).toEqual(1);
          expect(messageLog[1].id).toEqual(2);
          expect(messageLog[2].id).toEqual(3);
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  it('Should add into user into the database', (done) => {
    //commit comment
    //commit comment
    const queryString = 'INSERT INTO users (username) VALUES (?)';
    const queryArgs = ['Mr.amIinTheDatabase'];

    dbConnection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        throw err;
      }

      axios.get(`${API_URL}/users`)
        .then((response) => {
          const messageLog = response.data;
          console.log(messageLog[messageLog.length - 1].id);
          expect(messageLog.length).toBeGreaterThan(1);
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });


});
