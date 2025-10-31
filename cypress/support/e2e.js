// Import custom commands
import './commands'

// This runs before each spec file automatically
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent failing the test on unexpected JS errors
  return false;
});
