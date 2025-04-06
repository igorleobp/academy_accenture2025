import { elementsInsurant as el } from './elements';
import { fakerInsurantData as fk } from './elements';
import moment from 'moment';


Cypress.Commands.add('fillInsurantData', () => {

// Custom command to fill out the "Insurant Data" form with valid information

const formatedDate = moment(fk.dateBday).format('MM/DD/YYYY')

    cy.get(el.VALID_INSURANT_TAB).should('contain.text', 'Enter Insurant Data')

    cy.log('Filling out the Insurant Data form')
   
    cy.get(el.FIRSTN_FIELD).type(fk.firstName)

    cy.get(el.LASTN_FIELD).type(fk.lastName)

    cy.get(el.BDATE_FIELD).click().type(formatedDate)

    cy.get(el.COUNTRY).select('Brazil')

    cy.get(el.ZIP_CODE).type(fk.zipCode)

    cy.get(el.OCCUPATION).select(Math.floor(Math.random() * 5) + 1)

    cy.get(el.HOBBIES).click({force:true})

    cy.get(el.BTN_NEXTI).click()
})

