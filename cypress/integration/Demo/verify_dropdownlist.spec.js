const commonFn = require('../../common/commonFunction.js');
const dropdownpage = require('../../pages/dropdown_page.js');
const homepage = require('../../pages/home_page.js');

const page = 'Dropdown';
const title = 'Dropdown List';
const url = '/dropdown';

describe('verify dropdown page', () => {
  it('go to dropdown page', () => {
    homepage().goToHomePage();
    homepage().goToPage(page);
  })
  it('select Option 1', () => {
    dropdownpage().selectOption1();
  })
  it('verify current value is Option 1', () => {
    dropdownpage().verifyCurrentValue();
  })
})