describe('login', () => {
  it('success login', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('#Password').type('siapayak')
    cy.get('form > .buttons > .button-1').click()
  })
  it('failed login', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('#Password').type('hmm')
    cy.get('form > .buttons > .button-1').click()
  })
  it('forgot password when login', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('.forgot-password > a').click()
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('form > .buttons > .button-1').click()
  })
})
