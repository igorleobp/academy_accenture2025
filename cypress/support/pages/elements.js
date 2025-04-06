import { faker } from '@faker-js/faker';


export const elementsHome = {

    BTN_GET_QUOTE: '#get_automobile',
    DIV_VAL_AUTO: '#selectedinsurance',

}

export const elementsVehicle = {

    MAKE_FIELD: '#make',
    ENGINE_KW: '#engineperformance',
    DATE_MANUFACTURE: '#dateofmanufacture',
    NUM_SEATS: '#numberofseats',
    FUEL_TYPE: '#fuel',
    LIST_PRICE: '#listprice',
    ANUAL_MIL: '#annualmileage',
    BTN_NEXTV: '#nextenterinsurantdata',
    ICON_VALID: '.idealsteps-step',
    BTN_PRICE_PAGE: '#selectpriceoption',

}

export const fakerVehicleData = {

    engineKw: faker.number.int({ min: 2, max: 2000 }),
    dateMAN: faker.date.between({ from: '1908-01-01', to: '2025-04-04' }),
    seatsArray: ['9','8','7','6','5','4','3','2','1'],
    listPrice: faker.number.int({ min: 500, max: 100000 }),
    anualMil: faker.number.int({ min: 100, max: 100000 }),

    
}

export const elementsInsurant = {

    VALID_INSURANT_TAB: '#enterinsurantdata',
    FIRSTN_FIELD: '#firstname',
    LASTN_FIELD: '#lastname',
    BDATE_FIELD: '#birthdate',
    COUNTRY: '#country',
    ZIP_CODE: '#zipcode',
    OCCUPATION: '#occupation',
    HOBBIES: '#cliffdiving',
    BTN_NEXTI: '#nextenterproductdata'
    
}

export const fakerInsurantData = {

    firstName: faker.person.firstName(),
    lastName: faker.person.lastName().replace(/\W/g, ''),
    dateBday: faker.date.between({ from: '1955-04-04', to: '2007-04-04' }),
    zipCode: faker.location.zipCode('########'),
    jobsArray: ['Employee', 'Public Official', 'Farmer', 'Unemployed', 'Selfemployed'],
    dateStart: faker.date.between({ from: '2025-04-04', to: '2075-04-04' }),
    
}

export const elementsProduct = {

    VALID_PRODUCT_TAB: '#enterproductdata',
    START_DATE_FIELD: '#startdate',
    INSURANCE_SUM: '#insurancesum',
    MERIT_RATE: '#meritrating',
    DMG_INSURANCE: '#damageinsurance',
    COURTSY_CAR: '#courtesycar',
    BTN_NEXTP: '#nextselectpriceoption',
}

export const fakerProductData = {

    dateStart: faker.date.between({ from: '2025-04-04', to: '2075-04-04' }),
    
}

export const elementsPrice = {

    PRICE_TABLE: '#priceTable',
    BTN_VIEW_QUOTE: '#viewquote',
    BTN_NEXT_PRICE: '#nextsendquote'

}

export const elementsQuote = {

    CONT_FINISHED: '#finished-container',
    EMAIL_FIELD: '#email',
    USRNAME_FIELD: '#username',
    PWD_FIELD: '#password',
    PWD_CON_FIELD: '#confirmpassword',
    BTN_SEND: '#sendemail',
    SEND_EMAIL_ALERT: '.sweet-alert',
    LOADING_ALERT:'#LoadingPDF',
    WAVE_SPAN: '.audio-wave',
    ERROR_MSG: '#xLoaderPrice'
}



