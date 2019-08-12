const commonFn = require('../common/commonFunction.js')
const checkbox1 = '#checkboxes>input:first';
const checkbox2 = '#checkboxes>input:last';
const checkbox1Xpath = '//*[@id="checkboxes"]/input[1]';
const checkbox2Xpath = '//*[@id="checkboxes"]/input[2]';

function checkboxesPage() {
  return {

    selectCheckbox1: function () {
      commonFn().checkbox_Check(checkbox1, true);
    },
    unselectCheckbox2: function () {
      commonFn().checkbox_Check(checkbox2, false);
    },
    selectCheckbox1ByXpath: function () {
      commonFn().checkbox_CheckByXpath(checkbox1Xpath, true);
    },
    unselectCheckbox2ByXpath: function () {
      commonFn().checkbox_CheckByXpath(checkbox2Xpath, false)
    }
  }
}
module.exports = checkboxesPage;