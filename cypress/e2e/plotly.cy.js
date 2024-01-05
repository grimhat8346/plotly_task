describe('Cypress.io Website Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('should scroll to and verify weekly downloads number', () => {
    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    cy.get('.font-bold.text-gray-1000.text-\\[28px\\].leading-\\[40px\\].font-primary').first()
        .invoke ('text')
        .should('equal', '5M+')
  });

  it('should navigate to About Cypress from Company', () => {
    cy.get('[id="dropdownCompany"]').trigger('mouseover');
    cy.contains('About Cypress').click();
    cy.url().should ('include', '/about-us')
  });

  it('should navigate to and verify npm install command', () => {
    cy.get('[data-cy="header-install"]').click({force:true});
    cy.contains('npm install cypress').click();
    cy.window().then(win => {
      win.navigator.clipboard.readText().then(text => {
        expect(text).to.eq('npm install cypress --save-dev');
      });
    });
  });

  it('should navigate to Visual Review from Product', () => {
    cy.contains('Product').trigger('mouseover');
    cy.contains('Visual Reviews').click();
    cy.url().should('include', 'visual_reviews');
  });

  it('should navigate to Test Analytics under Smart Orchestration and verify green circle', () => {
    cy.contains('Product').trigger('mouseover');
    cy.contains('Smart Orchestration').click();
    cy.scrollTo(0,8100);
    cy.get('.border-jade-200').should('have.css', 'border-color', 'rgb(163, 231, 203)');
  });

});
