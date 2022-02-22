describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/');
    cy.findByText(/^1$/).click();
    cy.findByText(/^\+$/).click();
    cy.findByText(/^4$/).click();
    cy.debug();
    cy.findByText(/^=$/).click();
    cy.findByTestId(/total/i).should('have.text', '5');
  });
});
