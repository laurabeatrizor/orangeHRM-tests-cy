/// <reference types="Cypress" />

describe('OrangeHRM tests', function() {
    beforeEach(function(){
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    
    it('verifica o título da aplicação', function() {
       
        cy.title().should('be.equal','OrangeHRM')
    })

    it('Preenche os campos e realiza login', function(){
        cy.get('input[name="username"]')
            .should('be.visible')
            .type('Admin',{delay:0})
            .should('have.value', 'Admin')
        cy.get('input[name="password"]')
            .should('be.visible')
            .type('admin123',{delay:0})
            .should('have.value', 'admin123')
        cy.get('.oxd-button').click()
    })

    it('exibe mensagem "Invalid credentials" ao submeter o formulário com um usuário inválido', function(){
        cy.get('input[name="username"]')
            .should('be.visible')
            .type('Admin123')
            .should('have.value', 'Admin123')
        cy.get('input[name="password"]')
            .should('be.visible')
            .type('admin123')
            .should('have.value', 'admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-alert-action').should('be.visible')
    })

    it('Exibe mensagem "Required" no campo password ao tentar logar somente com username', function() {
        cy.get('input[name="username"]')
            .should('be.visible')
            .type('Admin123')
            .should('have.value', 'Admin123')
        cy.get('.oxd-button').click()
       
        cy.contains('Required'). should('be.visible')
    })

    it('Exibe mensagem "Required" no campo username ao tentar logar somente com password', function() {
        cy.get('input[name="password"]')
            .should('be.visible')
            .type('admin123')
            .should('have.value', 'admin123')
        cy.get('.oxd-button').click()

        cy.contains('Required'). should('be.visible')
    })

    it('Exibe mensagem "Required" nos campos password e username ao tentar logar com ambos os campos vazios', function() {       
        cy.contains('.oxd-button', 'Login').click()
       
        cy.contains('Required'). should('be.visible')
    })
    
    it('Preenche e limpa os campos username e password', function() {
        cy.get('input[name="username"]')
            .type('Admin')
            .should('have.value', 'Admin')
            .clear()
            .should('have.value', '')
        cy.get('input[name="password"]')
            .type('admin123')
            .should('have.value', 'admin123')
            .clear()
            .should('have.value', '')
            
              
    })

    it('Preenche os campos e realiza login usando um comando customizado', function() {
       cy.fillMandatoryFieldsAndSubmit()
              
    })
    

    it('Seleciona um item pelo nome em uma lista', function() {
        cy.get('input[name="username"]')
            .should('be.visible')
            .type('Admin',{delay:0})
            .should('have.value', 'Admin')
        cy.get('input[name="password"]')
            .should('be.visible')
            .type('admin123',{delay:0})
            .should('have.value', 'admin123')
        cy.get('.oxd-button').click()
        cy.get('ul>li').each(($el,index,$list) => {
            if($el.text().includes('Leave')){
                cy.wrap($el).click(); 
            }

               
     })
     
  })
  it('Seleciona um item pelo indice em uma lista', function() {
    cy.get('input[name="username"]')
        .should('be.visible')
        .type('Admin',{delay:0})
        .should('have.value', 'Admin')
    cy.get('input[name="password"]')
        .should('be.visible')
        .type('admin123',{delay:0})
        .should('have.value', 'admin123')
    cy.get('.oxd-button').click()
    cy.get('ul>li').each(($el,index) => {
        if(index===6){
            cy.wrap($el).click(); 
        }
           
 })

})

it('Verifica que o link https://www.orangehrm.com/ abre em outra aba sem a necessidade de um clique', function() {
    
    cy.get(':nth-child(2) > a').should('have.attr', 'target', '_blank')
           
 })

 it('Remove o target do link https://www.orangehrm.com/', function() {
    
    cy.get(':nth-child(2) > a').invoke('removeAttr', 'target')
           
 })

})