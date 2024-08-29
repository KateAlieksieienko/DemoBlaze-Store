describe('Sign In page', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });
    
    it('should provide a successful log in', () => {
        cy.get('#login2').click();
        cy.get('#loginusername').type('Kate234');
        cy.get('#loginpassword').type('SuperPassword!');

        cy.get(
            '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
          ).click();

      });
    });
  
    describe('Adding the Samsung galaxy S6', () => {
        beforeEach(() => {
          cy.visit('https://www.demoblaze.com/');

          cy.get('#login2').click();
          cy.get('#loginusername').type('Kate234');
          cy.get('#loginpassword').type('SuperPassword!');
  
          cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        });
        
    it('should provide a successful adding product to the shoping cart', () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        
        cy.get('.col-sm-12 > .btn').click();   

        cy.get(':nth-child(4) > .nav-link').click();
          });
        });    