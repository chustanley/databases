// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  // adds username onto _data array;
  add: function (friend) {
    Friends._data.push(friend);
  },

  // checks status of friendship.
  toggleStatus: function (username) {

    var specificUsernameIndex = Friends._data.indexOf(username); // -1

    if (!Friends.checkFriendshipStatus(username)) {
      Friends.add(username); // Because MessagesView.handleClick() is in initialize, it immediately runs the function on run.
      console.log(Friends._data);
    } else {
      Friends._data.splice(specificUsernameIndex, 1);
      console.log(Friends._data);
    }


    // Parse.readAll((data) => {
    //   Messages._get();
    // });

    MessagesView.render();
  },

  checkFriendshipStatus: function (friend) {
    for (var i = 0; i < Friends._data.length; i++) {
      if (Friends._data[i] === friend) {
        return true;
      }
    }
    return false;
  }
};