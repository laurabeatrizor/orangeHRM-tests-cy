Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[name="username"]')
        .should('be.visible')
        .type('Admin')
        .should('have.value', 'Admin')
    cy.get('input[name="password"]')
        .should('be.visible')
        .type('admin123')
        .should('have.value', 'admin123')
    
        cy.get('.oxd-button').click()
})