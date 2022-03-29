describe('Home page content', () => {
    it('Contains the intro and nav', () => {
        cy.visit('http://localhost:3000');
        cy.get('nav').should('contain', 'about' );
        cy.get('h1').should('contain', 'Robbie Carroll')
    })
})