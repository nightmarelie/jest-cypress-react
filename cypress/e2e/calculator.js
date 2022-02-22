// prettier-ignore
describe('anonymos calculator', () => {
  it('can make calculations', () => {
    cy.visit('http://localhost:8080')
    cy.contains(/^1$/).click();
    cy.contains('+').click();
    cy.contains(/^4$/).click();
    cy.contains(/^=$/).click();
    cy.get('[data-testid=total]').should('have.text', '5')
  });
});
