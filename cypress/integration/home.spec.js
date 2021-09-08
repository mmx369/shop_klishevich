context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find our start message', () => {
    cy.get('div').contains('Нумизматика')
  })
})
