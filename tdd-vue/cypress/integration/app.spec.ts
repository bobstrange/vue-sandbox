describe('app', () => {
  it('shows title', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Post List')
  })

  it('shows posts', () => {
    cy.visit('/')
    cy.get('.post-item').should('have.length', 100)
  })
})
