describe('Navigation', () => {
  it('should navigate to pages', function () {
    // Start from the index page
    cy.visit('/')
    // Find a link with an href attribute containing "about" and click it
    cy.contains('Оплата и доставка')
      .click({ multiple: true })
      .url()
      .should('include', '/paymentandshipping')
    cy.contains('Вопросы')
      .click({ multiple: true })
      .url()
      .should('include', '/faq')
    cy.contains('Контакты')
      .click({ multiple: true })
      .url()
      .should('include', '/contacts')
    // The new url should include "/about"
    // cy.url().should('include', '/paymentandshipping')
  })
})
