// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {
  $form: $('form'), //LOCATION ON DOM WHERE YOU SUBMIT MESSAGES


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); //GIVING THE BUTTON FUNCTIONALITY
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {};

    message['username'] = App.username;
    //.val is used to get the values from 'input, select, textarea' from form elements
    // getting values from the #message ID on dom which is a input tag with the type text on DOM
    message['text'] = $('#message').val();
    message['roomname'] = Rooms.selectedRoom; //Currently Selected Room which is defaulted to 'Lobby'
    // this sends the object created to the Parse API -> server array
    Parse.create(message);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};