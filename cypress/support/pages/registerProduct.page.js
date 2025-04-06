import { elementsProduct as el } from './elements';
import { fakerProductData as fk } from './elements';
import moment from 'moment';


Cypress.Commands.add('fillProductData', () => {

// Custom command to fill out the "Product Data" form with dynamically selected valid information

const formatedDate = moment(fk.dateStart).format('MM/DD/YYYY');


    cy.get(el.VALID_PRODUCT_TAB).should('contain.text', 'Enter Product Data')

    cy.log('Filling out the Product Data form')

    cy.get(el.START_DATE_FIELD).click().type(formatedDate)

    cy.get(el.INSURANCE_SUM).find('option').then($insuOptions => {
        const insuValues = [...$insuOptions].map(o => o.value).filter(v => v !== 'default')
        const randomInsuValue = Cypress._.sample(insuValues)
    cy.get(el.INSURANCE_SUM).select(randomInsuValue)
    });

    cy.get(el.MERIT_RATE).find('option').then($meritOptions => {
        const meritValues = [...$meritOptions].map(o => o.value).filter(v => v !== 'default')
        const randomMeritValue = Cypress._.sample(meritValues)
    cy.get(el.MERIT_RATE).select(randomMeritValue)
    });

    cy.get(el.DMG_INSURANCE).find('option').then($dmgOptions => {
        const dmgValues = [...$dmgOptions].map(o => o.value).filter(v => v !== 'default')
        const randomDmgValue = Cypress._.sample(dmgValues)
    cy.get(el.DMG_INSURANCE).select(randomDmgValue)
    });

    cy.get('input[name="Optional Products[]"]').then($prdtCheckboxes => {
        const prdtCheckboxesArray = [...$prdtCheckboxes]
        const randomCheckbox = Cypress._.sample(prdtCheckboxesArray)
    cy.wrap(randomCheckbox).check({ force: true })
    }); 

    cy.get(el.COURTSY_CAR).find('option').then($crtOptions => {
        const crtValues = [...$crtOptions].map(o => o.value).filter(v => v !== 'default')
        const randomCrtValue = Cypress._.sample(crtValues)
    cy.get(el.COURTSY_CAR).select(randomCrtValue)
    });      
    
    cy.get(el.BTN_NEXTP).click()
})

