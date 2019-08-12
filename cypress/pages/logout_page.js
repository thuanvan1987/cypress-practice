const commonFn = require('../common/commonFunction.js');
const btnLogout = '.button.secondary.radius';

function logoutPage() {
  return {
    logout: function () {
      commonFn().button_Click(btnLogout);
    }
  }
}
module.exports = logoutPage;