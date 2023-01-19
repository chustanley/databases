// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  selectedRoom: 'Lobby',


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.


  //Creates a new array which contains the room names of the newly generated Data
  //Rooms.update only gets called in App.fetch because when new data comes along, we use update to update the Rooms._data which serves other JS files information
  update: function (data) {
    var onLoadArray = data;
    var resultArray = [];

    for (var i = 0; i < onLoadArray.length; i++) {
      if (resultArray.indexOf(onLoadArray[i].roomname) === -1) {
        resultArray.push(onLoadArray[i].roomname);
      }
    }
    Rooms._data = resultArray;

    RoomsView.render();
  },


  //Allows other JS files to retrieve thew newly generated Data.
  get: function () {
    return Rooms._data;
  },





  add: function (roomname) { // YOU ARE RECEIVING A SPECIFIC ROOM HERE
    // add a room permantly into the chat

    var message = {};
    var text = roomname + ' created by ' + App.username;

    message['username'] = null;
    message['text'] = text;
    message['roomname'] = roomname;

    Parse.create(message);
    /*
    Selected room got reassigned in RoomsView.HandleClick() .      $$$

    Parse.create(message) = creates an empty message with just a newly created room
     - however, this will cause a 'message' to be generated into the database. Leading up to a new render.
     - app.fetch gets called again, new data gets assigned to
        1. messages update which calls messagesview. render
        2. rooms update which calls roomsview. render

     - when that happens,
       1. RoomsView render will render out the selectedRoom first (which got reassigned above @ $$$)
         - selected room will be on the very top visually

       2. Messages render will go through the main data and look for messages that have a roomname property of the specific selected room (which is displayed first above!)

       ALL IN ALL
        - Even if people send messages, causing the data to change -> then the page to refresh, To us it doesnt matter because our selected room and our other functions will only show us that specific room.
    // */
  },

  markRoomAsSelected: function () { //CALLED ON THE DOM
    // TODO: Handle a user selecting a different room.
    var selectBox = document.getElementById('selectBox');
    Rooms.selectedRoom = selectBox.value;
    console.log('You are now in', Rooms.selectedRoom);
  }
};