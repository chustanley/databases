// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'), //where the messages go

  initialize: function() {
    // TODO: Perform any work which needs to be done
    MessagesView.handleClick();
  },

  //RENDERS INITIAL BATCH OF MESSAGES
  render: function() {
    // TODO: Render _all_ the messages.

    MessagesView.$chats.empty(); // THIS WIPES THE ENTIRE FEED

    var specificRoomGeneratedData = Messages.get(); //GETS THE NEW DATA
    console.log(specificRoomGeneratedData);

    //CREATING AN ARRAY OF MISSAGES TO DISPLAY WITH ONLY MESSAGES FROM THE SPECIFIC SELECTED ROOM!!
    var filteredArray = _.filter(specificRoomGeneratedData, function (message) {
      if (message.roomname === Rooms.selectedRoom) {
        return message;
      }
    });

    for (var i = 0; i < filteredArray.length; i++) {
      MessagesView.renderMessage(filteredArray[i]);
    }

  },

  //RENDERS ONE MESSAGE
  renderMessage: function(message) {
    // TODO: Render a single message.
    var newMessage;

    for (var i = 0; i < Friends._data.length; i++) {
      if (Friends._data[i] === message.username) {
        newMessage = MessageView.renderFriend(message);
        MessagesView.$chats.append(newMessage);
        return;
      }
    }


    var newMessage = MessageView.render(message);
    MessagesView.$chats.append(newMessage);
  },

  //ADDING TO FRIENDSLIST
  handleClick: function(event) { //PROBLEM NOT HERE
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    MessagesView.$chats.on('click', '.username', function () { // when you click username
      var username = this.innerText;
      Friends.toggleStatus(username);
    });
  }

};