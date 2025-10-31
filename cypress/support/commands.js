// ✅ You can define reusable Cypress commands here

Cypress.Commands.add('fillRegistrationForm', (name, email) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
});
