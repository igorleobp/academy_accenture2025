#utf-8
#language: en

Feature: testQuote-01 - Insurance Quote
    Scenario: Successfully submitting the quote form with only required field
        Given I access the Tricent portal
        And click on the Get a Quote Automobile button
        When I complete the Vehicle Data form 
        And complete the Insurant Data form 
        And complete the Product Data form 
        And complete the Price Option form
        And complete the Send Quote form
        And click on the Send button
        Then I should receive a success message