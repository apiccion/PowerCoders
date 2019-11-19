module.exports = {
    create: create,
    list: list,
};


var usernames = [];
var passwords = [];

// Passwords requirements:
//  * 8 characters long
//  * two numbers
//  * two special characters
function create(username, password) {
    if (username.length == 0) {
        return false;
    }
    if (password.length < 8) {
      return false;
    }

    // Match at least two digits.
    if (!password.match(/[0-9].*[0-9]/)) {
      return false
    }

    // Match at least two special characters.
    if (!password.match(/!.*!/)) {
      return false
    }

    if (exists(username)) {
      return false;
    }

    usernames.push(username);
    passwords.push(passwords);

    return true;
}

function exists(username) {
    // Return true if an account exists.
    if (usernames.indexOf(username) == -1) {
      return false;
    }

    return true;
}

function list() {
    return usernames[0];
}
