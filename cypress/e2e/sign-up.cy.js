describe('Sign Up page', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });
    
    it('should provide a successful sign up', () => {
        cy.get('#signin2').click();
        cy.get('#sign-username').type('Kate234');
        cy.get('#sign-password').type('SuperPassword!');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        ).click();    

      });
    });
  