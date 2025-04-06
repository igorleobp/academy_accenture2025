import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('I access the Tricent portal', () => {
    
    cy.visit('/')
     
 })

And('click on the Get a Quote Automobile button', () => {
    
    cy.acessQuotePage()
    
 })

When('I complete the Vehicle Data form', () => {
    
   cy.fillVehicleData()

})

And('complete the Insurant Data form', () => {
    
   cy.fillInsurantData()

})

And('complete the Product Data form', () => {
    
   cy.fillProductData()

})

And('complete the Price Option form', () => {
    
   cy.fillPriceData()

})

And('complete the Send Quote form', () => {
    
   cy.fillQuoteData()

})

And('click on the Send button', () => {
    
   cy.clickSend()

})


Then('I should receive a success message', () => {
    
   cy.successConfirmation()

})