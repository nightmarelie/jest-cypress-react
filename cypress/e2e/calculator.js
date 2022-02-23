describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/');
    cy.findByText(/^1$/).click();
    cy.findByText(/^\+$/).click();
    cy.findByText(/^4$/).click();
    cy.findByText(/^=$/).click();
    cy.findByTestId(/total/i).should('have.text', '5');
  });
});

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.createUser().then(user => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: user,
      }).then(response => {
        window.localStorage.setItem('token', response.body.user.token);
      });
      cy.visit('/');
      cy.findByTestId('username-display').should('have.text', user.username);
      cy.findByText(/logout/i).click();
      cy.findByTestId('username-display').should('not.exist');
    });
  });
});
