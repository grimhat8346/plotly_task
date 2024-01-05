import selectors from '../support/selectors'

describe('Cypress.io Website Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('should scroll to and verify weekly downloads number', () => {
    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    cy.get(selectors.weeklyDownloadsText).first()
        .invoke ('text')
        .should('equal', '5M+')
  });

  it('should navigate to About Cypress from Company', () => {
    cy.get(selectors.dropdownCompany).trigger('mouseover');
    cy.contains(selectors.aboutCypress).click();
    cy.url().should ('include', '/about-us')
  });

  it('should navigate to and verify npm install command', () => {
    cy.get(selectors.installHeader).click({force:true});
    cy.contains(selectors.npmInstallCypress).click();
    cy.window().then(win => {
      win.navigator.clipboard.readText().then(text => {
        expect(text).to.eq('npm install cypress --save-dev');
      });
    });
  });

  it('should navigate to Visual Review from Product', () => {
    cy.contains(selectors.productMenu).trigger('mouseover');
    cy.contains(selectors.visualReviews).click();
    cy.url().should('include', 'visual_reviews');
  });

  it('should navigate to Test Analytics under Smart Orchestration and verify green circle', () => {
    cy.contains(selectors.productMenu).trigger('mouseover');
    cy.contains(selectors.smartOrchestration).click();
    cy.scrollTo(0,8100);
    cy.get(selectors.greenCircle).should('have.css', 'border-color', 'rgb(163, 231, 203)');
  });

});
