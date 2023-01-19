// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // add room button
  $select: $('#rooms select'), // drop down

  initialize: function() {
    RoomsView.handleClick();
  },

  //LOADS NEW ROOMS DATA ONTO PAGE //Comment //Complete comment
  render: function() {
    var filteredRooms = Rooms.get(); //GETS INFORMATION FROM ROOMS.UPDATE -> ARRAY THAT ONLY CONTAINS THE NAME OF THE ROOM (FILTERED THROUGH LOOPING)
    RoomsView.$select.empty(); // EMPTIES OUT THE CONTENT IN $SELECT
    RoomsView.renderRoom(Rooms.selectedRoom); //FIRST ROOM RENDERED AND SHOWED ON SELECT BAR IS THE VALUE OF SELECTED ROOM ('LOBBY ATM')

    for (var i = 0; i < filteredRooms.length; i++) { //EVERYTHING THAT IS NOT THE SELECTED ROOM, RENDER UNDER
      if (filteredRooms[i] !== Rooms.selectedRoom) {
        RoomsView.renderRoom(filteredRooms[i]);
      }
    }
  },

  //ATTACHES OPTIONS TAG ONTO EACH INDIVIDUAL ROOMS
  renderRoom: function(roomname) {
    // TODO: Render out a single room
    var roomTags = $('<option>').text(roomname);
    RoomsView.$select.append(roomTags);
  },

  //WHEN THE SELECT TAG CHANGES (CHECK HTML FILE @ ONCHANGE)
  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('Now rendering messages for ' + Rooms.selectedRoom);
    MessagesView.render();
  },

  //ADD ROOM BUTTON
  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.on('click', function () {

      //THIS CREATES A POP UP
      var addSpecificRoom = prompt('Create room name');

      //CREATES AN EMPTY MESSAGE W/ NO USERNAME INCLUDED (FIRST MESSAGE IN THAT NEWLY CREATED ROOM)
      Rooms.add(addSpecificRoom);

      //REASSIGNING SELECTED ROOM TO THE NEWLY GENERATED ROOM
      Rooms.selectedRoom = addSpecificRoom;
      // entered it because of Rooms.add() function
      console.log('You just added ' + Rooms.selectedRoom + ' and have now entered it.');
    });
  }
};
