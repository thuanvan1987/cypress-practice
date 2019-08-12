const baseURL = require('../fixtures/data/const.json')

function homePageFn() {
  return {
    goToHomePage: function () {
      cy.visit(baseURL.baseUrl);
    },
    goToPage: function (page) {
      cy.contains(page).click()
    }
  }
}
module.exports = homePageFn;