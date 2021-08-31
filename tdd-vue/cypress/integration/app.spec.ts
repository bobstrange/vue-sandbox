describe('app', () => {
  it('shows title', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Post List')
  })

  it('shows posts', () => {
    cy.visit('/')
    cy.get('.post-item').should('have.length', 100)
  })

  it('goes to the detail page', () => {
    cy.visit('/')
    cy.get('.post-item > a').first().click()
    cy.url().should('include', '/posts/1')
    cy.get('.post-title').contains(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    )
  })
})
