/// <reference types = 'cypress'/>

describe('E2E Testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('Navigation work fine and pages rendered correctly', () => {
    cy.log('**----Test started----**')
    cy.log('**App bar link**')
    cy.get('[data-testid = navhomepagelink]').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.log('**Sign in page**')
    cy.contains('Войти').click()
    cy.contains(/войти с помощью google/i).should('exist')
    cy.contains(/войти с помощью facebook/i).should('exist')
    cy.contains(/получить ссылку для входа/i).should('exist')

    cy.visit('/')

    cy.log('**Empty cart**')
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.contains(/корзина пуста/i).should('exist')
    cy.get('body').trigger('keydown', { keyCode: 27 })
    cy.contains(/корзина пуста/i).should('not.exist')

    cy.log('**Drawer**')
    cy.get('[data-testid = drawerBtn]').click()
    cy.get('[data-testid = drawer]').should('be.visible')
    cy.get('[data-testid = drawerCloseBtn]').click()
    cy.get('[data-testid = drawer]').should('not.be.visible')

    cy.log('**Footer**')
    cy.log('**Payment and shipping**')
    cy.get('[data-testid = footerPaymentBtn]').click()
    cy.url().should('include', '/paymentandshipping')
    cy.get('[data-testid = paymentpage]').should('be.visible')
    cy.go('back')

    cy.log('**Faq page**')
    cy.wait(4000)
    cy.get('a[href*="faq"]').click()
    cy.url().should('include', '/faq')
    cy.get('[data-testid = faqpage]').should('be.visible')
    cy.get('[data-testid = faqpage] div:first')
      .click()
      .contains(/минимальной суммы заказа нет/i)
    cy.get('[data-testid = faqpage] > div').each(($el) => {
      cy.wrap($el).click().should('not.be.empty')
    })
    cy.log('**Contacts**')
    cy.get('a[href*="contacts"]').click()
    cy.url().should('include', '/contacts')
    cy.get('main').should('be.visible')
    cy.get('[alt="IBNS Logo"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('[data-testid=footerHomepageBtn]').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.log('**Homepage content**')
    cy.get('[data-testid = mainTextBlock]').should('be.visible')
    cy.findByTestId('catalogLeft').should('be.visible')
    cy.get('[data-testid = searchForm]').should('be.visible')
    cy.get('[data-testid^=test-]').should('have.length.greaterThan', 1)
    cy.get('[data-testid^=test-]').eq(0).click()

    cy.wait(1500)

    cy.log('**Search result product page**')
    cy.get('[data-testid = searchResultPage]').should('be.visible')
    cy.get('[data-testid=shopCard]').should('have.length.greaterThan', 0)
    cy.get('[data-testid=paginationMenu]').should('be.visible')
    cy.get('[data-testid = imgProduct]').each(($el) => {
      cy.wrap($el).should('have.css', 'background-image')
      cy.request(
        $el
          .css('background-image')
          .substring(5, $el.css('background-image').length - 2)
      ).then((res) => {
        expect(res.status).to.eql(200)
      })
    })
    cy.contains(/в корзину/i).click()
    cy.get('[data-testid=badgeNumber]').find('span').contains(1).should('exist')
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.get('[name="shipping"]:first').should('be.checked')
    cy.contains(/очистить/i).click()
    cy.get('[data-testid = searchForm]').should('be.visible')

    cy.log('**Product detail page**')
    cy.get('[data-testid=shopCard]').eq(0).click()
    cy.contains(
      /номер, серия и подпись могут отличаться от представленных на фото/i
    ).should('exist')
    cy.get('img:last')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.log('**Add to cart from product detail page**')
    cy.log('**Non empty cart**')
    cy.contains(/в корзину/i).click()
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.contains(/итого к оплате с учетом доставки/i).should('exist')
    cy.contains(/очистить/i).click()
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.contains(/корзина пуста/i).should('exist')
    cy.get('body').trigger('keydown', { keyCode: 27 })
    cy.contains(/назад/i).click()

    cy.log('**----Test finished----**')
  })
})
