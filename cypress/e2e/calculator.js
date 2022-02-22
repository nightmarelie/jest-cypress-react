describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/');
    cy.contains(/^1$/).click();
    cy.contains('+').click();
    cy.contains(/^4$/).click();
    cy.contains(/^=$/)
      .click()
      .get('[data-testid=total]')
      .should('have.text', '5');
  });
});
