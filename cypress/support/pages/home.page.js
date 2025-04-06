import { elementsHome as el } from './elements';


Cypress.Commands.add('acessQuotePage', () => {

// Custom command to access Quote form page

    cy.get(el.BTN_GET_QUOTE).click({force:true})

    cy.get(el.DIV_VAL_AUTO).should('include.text', 'Automobile Insurance')

    cy.log('Automobile Insurance section successfully validated')

})



