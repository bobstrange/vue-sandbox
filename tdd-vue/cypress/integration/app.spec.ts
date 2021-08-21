describe('booklist', () => {
  it('shows title', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Book List')
  })
})
