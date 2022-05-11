/// <reference types = 'cypress'/>

describe('Login page', () => {
  it('When you login UI renders correctly', () => {
    cy.visit('/')
    cy.contains(/вы вошли как/i).should('not.exist')
    cy.login()
    cy.visit('/')
    cy.wait('@session')
    cy.contains(/вы вошли как/i)
      .should('be.visible')
      .then(() => {
        cy.log('Cypress login successful')
      })
    cy.contains(/выйти/i).click()
    cy.contains(/вы вошли как/i).should('not.exist')
  })
})
