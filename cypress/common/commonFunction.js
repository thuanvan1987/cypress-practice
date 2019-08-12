function commonFn() {
  return {
    //----------------------------------header and title-----------------------------
    title_VerifyTitleH3: function (title) {
      cy.get('h3').should('contain', title)
    },
    title_VerifyTitleH2: function (title) {
      cy.get('h2').should('contain', title)
    },
    URL_verifyUrl: function (url) {
      cy.url().should('include', url)
    },
    /*
    checked = true: check
    checked = false: uncheck
    */
    //----------------------------------checkboxes-----------------------------
    checkbox_Check: function (checkbox, checked) {
      if (checked == true) {
        cy.get(checkbox)
          .check()
          .should('be.checked')
      } else {
        cy.get(checkbox)
          .uncheck()
          .should('not.be.checked')
      }
    },
    //----------------------------------checkboxes by xpath-----------------------------

    checkbox_CheckByXpath: function (checkbox, checked) {
      if (checked == true) {
        cy.xpath(checkbox)
          .check()
          .should('be.checked')
      } else {
        cy.xpath(checkbox)
          .uncheck()
          .should('not.be.checked')
      }
    },
    //----------------------------------dropdown-----------------------------
    dropdown_Select: function (dropdown, value) {
      cy.get(dropdown)
        .select(value)
    },
    dropdown_VerifyCurrentValue: function (dropdown, value) {
      cy.get(dropdown)
        .find(':selected')
        .contains(value)
    },
    //----------------------------------textbox-----------------------------
    textbox_SetText: function (textbox, value) {
      cy.get(textbox)
        .type(value)
        .should('have.value', value)
    },
    textbox_GetText: function (textbox) {
      cy.get(textbox).should(($textbox) => {
        const text = $textbox.text();
        return text;
      })
    },
    textbox_ClearText: function (textbox) {
      cy.get(textbox)
        .clear()
    },
    //----------------------------------button-----------------------------
    button_Click: function (button) {
      cy.get(button)
        .click()
    },
    button_Click: function (button, area) {
      cy.get(button)
        .click(area)
    },
    button_DblClick: function (button) {
      cy.get(button)
        .dblclick()
    },
    //----------------------------------table-----------------------------
    table_SortByColumn: function (table, column) {
      cy.get(table)
        .click(column);
    },
    table_GetHeader: function (table, column) {
      cy.get(table, column).then(header)
      return header.text();
    }
  }
}

module.exports = commonFn;