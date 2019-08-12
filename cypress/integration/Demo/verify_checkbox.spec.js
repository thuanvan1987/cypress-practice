/// <reference types="Cypress" />

const homepage = require('../../pages/home_page.js');
const checkboxpage = require('../../pages/checkboxes_page.js');
const commonFn = require('../../common/commonFunction.js')

const page = 'Checkboxes';
const title = 'Checkboxes';
const url = '/checkbox';

describe('Checkboxes page', () => {
  it('Go to checkboxes page', () => {
    homepage().goToHomePage();
    homepage().goToPage(page);
  })

  it('Verify title and url in  Checkboxes page', () => {
    commonFn().title_VerifyTitleH3(title);
    commonFn().URL_verifyUrl(url);
  })

  it('select checkbox1', () => {
    //checkboxpage().selectCheckbox1();
    checkboxpage().selectCheckbox1ByXpath();
  })

  it('unselect checkbox2', () => {
    //checkboxpage().unselectCheckbox2();
    checkboxpage().unselectCheckbox2ByXpath();
  })
})