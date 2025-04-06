import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


When('I access the Send Quote page before filling out the forms', () => {
    
   cy.accessSendQuotePage()

})

Then('a message should appear instructing to fill out previous forms', () => {
    
   cy.failQuote()

})