function getUserData() {
  return {
    readJSonFile: function (path, userType, value, callbackFn) {
      cy.fixture(path)
        .then((userData) => {
          callbackFn(userData[userType][0][value]);
        })
    }
  }
}
module.exports = getUserData;