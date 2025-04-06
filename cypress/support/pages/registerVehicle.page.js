import { elementsVehicle as el } from './elements';
import { fakerVehicleData as fk } from './elements';
import moment from 'moment';


Cypress.Commands.add('fillVehicleData', () => {

// Custom command to fill out the "Vehicle Data" form with valid information

const formatedDate = moment(fk.dateMAN).format('MM/DD/YYYY');
const chosenSeatNumber = Cypress._.sample(fk.seatsArray);

    cy.log('Filling out the Vehicle Data form')

    cy.get(el.MAKE_FIELD).select('Honda')
    
    cy.get(el.ENGINE_KW).type(fk.engineKw)
    
    cy.get(el.DATE_MANUFACTURE).click().type(formatedDate)

    cy.get(el.NUM_SEATS).select(chosenSeatNumber)

    cy.get(el.FUEL_TYPE).select('Petrol')

    cy.get(el.LIST_PRICE).type(fk.listPrice)
    
    cy.get(el.ANUAL_MIL).type(fk.anualMil)

    cy.get(el.BTN_NEXTV).click()


})

Cypress.Commands.add('accessSendQuotePage', () => {

// Custom command to navigate to the "Send Quote" page from the "Price Option" step

  cy.get(el.BTN_PRICE_PAGE).should('exist').and('be.visible')

  cy.get(el.BTN_PRICE_PAGE).click()

  cy.log('Navigating to the "Send Quote" page')


})

