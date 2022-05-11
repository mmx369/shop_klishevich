/// <reference types = 'cypress'/>

describe('Client Journey Map Testing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('Select and buy products', () => {
    cy.log('**----Test started----**')

    cy.log('**----Select and add to cart first product----**')
    cy.get('[data-testid=productFieldSelect]').click()
    cy.findByRole('option', { name: /банкноты/i }).click()
    cy.get('[data-testid=countryFieldSelect]').click()
    cy.get('[data-testid=selectOptionsCountry]')
      .should('have.length.greaterThan', 0)
      .last()
      .click()
    cy.get('[data-testid=searchBtn]').should('exist').click()
    cy.wait(4000)
    cy.get('[data-testid=addToCartBtn]').first().click()

    cy.log('**----Select and add to cart second product----**')
    cy.get('[data-testid=productFieldSelect]').click()
    cy.findByRole('option', { name: /монеты/i }).click()
    cy.wait(2000)
    cy.get('[data-testid=searchBtn]').click()
    cy.get('[data-testid=shopCard]').should('exist').last().click()
    cy.wait(4000)
    cy.get('[data-testid=detailedProductPageContent]').should('be.visible')
    cy.get('[data-testid=inputAddToCart]')
      .find('input')
      .clear()
      .type('{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}')
    cy.get('[data-testid=addToCartBtn]').click()

    cy.log('**----Products at cart rendered correctly----**')

    cy.get('[data-testid=badgeNumber]').find('span').contains(6).should('exist')
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.get('[data-testid=cartItem]').should('be.visible').and('have.length', 2)

    cy.log('**----Remove one product from the cart----**')
    cy.get('[data-testid = removeFromCart]').first().click()
    cy.get('[data-testid=cartItem]').should('be.visible').and('have.length', 1)
    cy.get('[data-testid=badgeNumber]').find('span').contains(5).should('exist')

    cy.log('**----Change amount of second product in the cart----**')
    cy.get('[data-testid = addToCart]').click()
    cy.get('[data-testid=badgeNumber]').find('span').contains(6).should('exist')

    cy.log('**----Checkout----**')
    cy.get('[data-testid=checkoutBtn]').click()
    cy.wait(4000)
    cy.url().should('include', '/checkout')
    cy.get('[data-testid=checkoutUnauthorizedPage]').should('be.visible')

    cy.log('**----Login to finished checkout process----**')
    cy.login()
    cy.visit('/checkout')

    cy.log('**----Fill in checkout form----**')

    cy.get('[data-testid=orderForm]').should('be.visible')
    cy.get('[name="secondName"]').type('Tester')
    cy.get('[name="firstName"]').type('Test')
    cy.get('[name="zip"]').type('104444')
    cy.get('[name="city"]').type('Москва')
    cy.get('[name="address"]').type('Проспект Мира 110 кв 66')
    cy.get('[name="phone"]').type('+79263941789')
    cy.get('[name="comments"]').type('This is just a cypress test')

    cy.log('**----Finishing checkout process----**')
    cy.intercept('POST', '/api/addneworder', {
      statusCode: 200,
      body: {
        message: 'Заказ успешно оформлен',
        order: {
          status: 'open',
          _id: '627bf9f3e6c3710e78f4ed69',
          email: 'growbox1978@gmail.com',
          firstName: 'Иван',
          secondName: 'Иванов',
          fatherName: '',
          zip: '109467',
          country: 'Россия',
          region: '',
          city: 'Москва',
          address: 'проспект Мира 123 кв 16',
          phone: '+449263941769',
          comments: '',
          order: [
            {
              _id: '6261ab669e6c8c3060a8b098',
              nameOfGoods: 'Test Catalog Number2444',
              amountOfGoods: 1,
              priceOfGoods: 5555,
            },
          ],
          totalPrice: 5555,
          shippingPrice: 400,
          date: '2022-05-11T18:01:23.808Z',
          __v: 0,
        },
      },
    }).as('getOrderStatus')
    cy.get('[data-testid=checkoutBtn]').click()

    cy.wait('@getOrderStatus')
    cy.log('**----Check checkout success page----**')
    cy.url().should('include', '/orders/627bf9f3e6c3710e78f4ed69')
    cy.get('[data-testid=orderSuccessPage]').should('be.visible')
    cy.contains('f4ed69').should('exist')

    cy.log('**----Checking the cart has no products----**')
    cy.get('[data-testid = ShoppingCartRoundedIcon]').click()
    cy.contains(/корзина пуста/i).should('exist')

    cy.log('**----Test finished----**')
  })
})
