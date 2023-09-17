describe('registration', () => {
// untuk pengujian test case pertama (success registration) selanjutnya akan muncul notif 'the specified email already exists' di web

  it('success registration', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('siapa')
    cy.get('#LastName').type('yak')
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('#Password').type('siapayak')
    cy.get('#ConfirmPassword').type('siapayak')
    cy.get('#register-button').click()
  })
  it('failed registration', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('siapa')
    cy.get('#LastName').type('yak')
    cy.get('#Email').type('siapayak007@gmail.com')
    cy.get('#Password').type('siapayak')
    cy.get('#ConfirmPassword').type('siap')
    cy.get('#register-button').click()
  })  
})
