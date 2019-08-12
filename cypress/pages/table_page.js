const commonFn = require('../common/commonFunction.js');

const table1 = '#table1>thead>tr>th>span';
const table2 = '#table2';

function tablePage() {
  return {
    getAllHeaders: function () {
      let headers = [];
      cy.get(table1).each(function (el, index, list) {
        headers.push(el.text());
        cy.log('content=' + el.text());
        cy.log('index=' + index);
        cy.log('list=' + JSON.stringify(list));
      })
      // cy.wait(5000);
      // cy.log(JSON.stringify(headers));
      return headers;
    }
    // table_ListHeader: function (table) {
    //   let listHeader = [];
    //   let i;
    //   for (i = 0; i < table1.length; i++) {

    //   }
    //   cy.get(table)
    // }
  }
}
module.exports = tablePage;