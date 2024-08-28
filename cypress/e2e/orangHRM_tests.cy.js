/// <reference types="Cypress" />

describe('OrangeHRM tests', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('be.equal','OrangeHRM')
    })
  })
  