import { elementsPrice as el } from './elements';


Cypress.Commands.add('fillPriceData', () => {

// Custom command to complete the "Price Option" step by selecting a random pricing plan

  cy.get(el.PRICE_TABLE).should('be.visible')

  cy.get('input[name="Select Option"]').then($priceRadioButtons => {
      const priceRadioArray = [...$priceRadioButtons]
      const randomRadio = Cypress._.sample(priceRadioArray)
      
  cy.wrap(randomRadio).check({ force: true });

  });

  cy.get(el.BTN_VIEW_QUOTE).should('be.visible')

  cy.get(el.BTN_NEXT_PRICE).click()

})

