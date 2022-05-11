/// <reference types = 'cypress'/>

describe('Search form testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('Search form works fine', () => {
    cy.log('**----Test started----**')
    cy.get('[data-testid = searchForm]').should('be.visible')

    cy.log('**Product Type Selected**')
    cy.get('[data-testid=productFieldSelect]')
      .contains(/показать все/i)
      .should('exist')
      .click()
    cy.get('[data-testid=selectOptionsProductTypes]')
      .should('have.length.greaterThan', 0)
      .contains(/банкноты/i)
      .should('exist')
    cy.findByRole('option', { name: /банкноты/i }).click()

    cy.log('**Country Product Selected**')
    cy.get('[data-testid=countryFieldSelect]')
      .contains(/показать все/i)
      .should('exist')
      .click()
    cy.get('[data-testid=selectOptionsCountry]')
      .should('have.length.greaterThan', 0)
      .first()
      .click()

    cy.log('**Minimum Price Selected**')
    cy.get('[data-testid=minPriceFieldSelect]')
      .contains(/не выбрано/i)
      .should('exist')
      .click()
    cy.get('[data-testid=selectOptionsMinPrice]')
      .should('have.length.greaterThan', 0)
      .contains('10')
      .should('exist')
      .click()

    cy.log('**Maximum Price Selected**')
    cy.get('[data-testid=maxPriceFieldSelect]')
      .contains(/не выбрано/i)
      .should('exist')
      .click()
    cy.get('[data-testid=selectOptionsMaxPrice]')
      .should('have.length.greaterThan', 0)
      .contains('500')
      .should('exist')
      .click()

    cy.log('**Search Result Page Testing**')
    cy.get('[data-testid=searchBtn]').should('exist').click()
    cy.get('[data-testid = searchForm]').should('be.visible')
    cy.get('[data-testid=paginationMenu]')
      .should('be.visible')
      .and('have.length', 2)
    cy.get('[data-testid=shopCard]')
    cy.get('body').then((body) => {
      if (body.find('[data-testid=shopCard]').length > 0) {
        cy.get('[data-testid=shopCard]').each(($el) => {
          cy.wrap($el).should('be.visible').and('have.length.above', 0)
        })
      }
    })

    cy.log('**----Test finished----**')
  })
})
