describe('Example', () => {
  it('has dropdown', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Create an event')
    cy.get('select').select('nature')
    cy.get('input')
  })
})
