const commonFn = require('../common/commonFunction.js');
const dropdown = '#dropdown';
const option1 = 'Option 1'

function dropdownPage() {
  return {
    selectOption1: function () {
      commonFn().dropdown_Select(dropdown, option1)
    },
    verifyCurrentValue: function () {
      commonFn().dropdown_VerifyCurrentValue(dropdown, option1);
    }
  }
}
module.exports = dropdownPage;