const commonFn = require('../common/commonFunction.js');
const txtUsername = '#username';
const txtPassword = '#password';
const btnLogin = '.radius';

function loginPage() {
  return {
    setTextUsername: function (value) {
      commonFn().textbox_SetText(txtUsername, value);
    },
    setTextPassword: function (value) {
      commonFn().textbox_SetText(txtPassword, value);
    },
    login: function () {
      commonFn().button_Click(btnLogin);
    }
  }
}
module.exports = loginPage;