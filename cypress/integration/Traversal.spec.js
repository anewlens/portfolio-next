describe('Move through out the site w/o the nav', () => {
    it('should move from home to about', () => {
        cy.visit('http://localhost:3000')
        cy.get('a#nextPageLink').click()
        cy.url().should('include', 'about');
    })

    it('should move from about to skills', () => {
        cy.visit('http://localhost:3000/about')
        cy.get('a#nextPageLink').click()
        cy.url().should('include', 'skills');
    })

    it('should move from skills to work', () => {
        cy.visit('http://localhost:3000/skills')
        cy.get('a#nextPageLink').click()
        cy.url().should('include', 'work');
    })

    it('should move from work to contact', () => {
        cy.visit('http://localhost:3000/work')
        cy.get('a#nextPageLink').click()
        cy.url().should('include', 'contact');
    })
})