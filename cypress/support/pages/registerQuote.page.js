import { elementsQuote as el } from './elements';


Cypress.Commands.add('fillQuoteData', () => {

// Custom command to fill out the "Send Quote" form using environment credentials

  cy.get(el.CONT_FINISHED).should('be.visible')

  cy.log('Filling out the Send Quote form')

  cy.get(el.EMAIL_FIELD).type(Cypress.env('email'), {log:false})

  cy.get(el.USRNAME_FIELD).type(Cypress.env('username'), {log:false})

  cy.get(el.PWD_FIELD).type(Cypress.env('password'), {log:false})

  cy.get(el.PWD_CON_FIELD).type(Cypress.env('password'), {log:false})


})

Cypress.Commands.add('clickSend', () => {

// Custom command to click the "Send" button and intercept the quote request

  cy.intercept('POST', '**/101/tcpdf/pdfs/quote.php').as('loading')

  cy.get(el.BTN_SEND).click()

})

Cypress.Commands.add('successConfirmation', () => {

  // Custom command to confirm successful submission of the quote request

  cy.get(el.LOADING_ALERT, {timeout: 10000}).should('not.exist')

  cy.get('@loading').its('response.statusCode').should('eq', 200)

  cy.log('POST request completed successfully - 200 OK')

  cy.get(el.SEND_EMAIL_ALERT).should('exist').and('be.visible').and('contain.text','success')


})

Cypress.Commands.add('failQuote', () => {

  cy.get(el.WAVE_SPAN).should('exist')

  cy.get(el.ERROR_MSG).should('contain.text','complete the first three steps to see the price table')
  
})