// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  update: function (data) {
    var onLoadArray = data;

    Messages._data = onLoadArray;
    //This is important because for example, when we add a room, and then automatically enter it through refreshing.
    /*
    Remember that when we add a room, we make it the specific selected room

    then we add a message to the database which only contains the room name

    MessagesView.render is then called and will only display messages on the DOM from the SPECIFIC SELECTED ROOM!
    */
    MessagesView.render();
  },

  get: function () {
    return Messages._data;
  },
};