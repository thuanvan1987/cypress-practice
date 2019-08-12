const commonFn = require('../../common/commonFunction.js');
const homePage = require('../../pages/home_page.js');
const tablePage = require('../../pages/table_page.js');

const page = 'Sortable Data Tables';

describe('verify table page', () => {
  it('go to Data Table page', () => {
    homePage().goToHomePage();
    homePage().goToPage(page);
  })

  it('test', () => {
    cy.log(JSON.stringify(tablePage().getAllHeaders()));
  })
})