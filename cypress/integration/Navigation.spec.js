describe('Navigation', () => {
    it('should navigate to the about page', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('a[href*="about"]').click()
  
      cy.url().should('include', '/about')
  
      cy.get('h1').contains('About')
    })

    it('should navigate to the skills page', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('a[href*="skills"]').click()
  
      cy.url().should('include', '/skills')
  
      cy.get('h1').contains('Skills')
    })

  it('should navigate to the work page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="work"]').click()

    cy.url().should('include', '/work')

    cy.get('h1').contains('Work')
  })

  it('should navigate to the contact page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="contact"]').click()

    cy.url().should('include', '/contact')

    cy.get('h1').contains('Contact')
  })
})