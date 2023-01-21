// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  stopper: '',

  //constantly running? this is whats being called into the page
  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize(); // SUBMIT MESSAGE BUTTON CALLED HERE
    RoomsView.initialize(); // CREATE ROOM NAME BUTTON HERE
    MessagesView.initialize(); //FRIENDING SOMEONE ON USERNAME CLIKC HERE

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    setInterval(App.fetch, 1000); //Constantly calling App.fetch which grabs data from server
  },

  fetch: function(callback = ()=>{}) {
    //parse.readall uses get which gets data from the server
    Parse.readAll((data) => {
      console.log('data', data); // = []

      if (data.length === 0) {
        App.stopSpinner();
        return;
      } else if (App.stopper === data[data.length - 1].id) {
        return;
      } else {
        //This condition is saying that it will only perform these functions only when a new message occurs
        // TODO: Use the data to update Messages and Rooms
        // and re-render the corresponding views.
        App.startSpinner();
        App.stopper = data[data.length - 1].id; // 0 because new data message is always at 0 index

        Rooms.update(data);
        Messages.update(data);
        App.stopSpinner();
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
