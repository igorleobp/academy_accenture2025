#utf-8
#language: en

Feature: testeQuote-01 - Insurance Quote
    Scenario: Display a message when accessing Send Quote page without completing previous steps
        Given I access the Tricent portal
        And click on the Get a Quote Automobile button
        When I access the Send Quote page before filling out the forms
        Then a message should appear instructing to fill out previous forms