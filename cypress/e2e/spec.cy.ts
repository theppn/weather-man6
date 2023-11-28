describe('E2e nominal test cases', () => {
  it('should display results for Paris', () => {
    cy.visit('/');
    cy.get('#test').click();
    cy.get('.tab-title-container').should('exist');
  })
})
