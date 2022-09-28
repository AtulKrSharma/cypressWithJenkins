/// <reference types="Cypress" />

describe("My Test Suite", () => {

    it.only('depositProtection', () => {

        cy.visit('https://www.depositprotection.com/#')
        cy.url().should('include', 'deposit')
        cy.title().should('include', 'deposit')
        cy.get('a[role=link]').click()
        cy.get('span[data-part=title]').should('be.visible')
        //username
        cy.get('#Username').should('be.enabled').clear().type('vuluh@vomoto.com')
        cy.get('#ConfirmUsername').clear().type('vuluh@vomoto.com')

        //password
        cy.get('#Password').type('Deposit@123#')
        cy.get('#ConfirmPassword').type('Deposit@123#')

        //security questions
        cy.get('select').select(0).should('have.value','Date of birth')


    });

});
