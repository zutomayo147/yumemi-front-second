describe('halfCheckboxesCount', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should randomly select half of the checkboxes and uncheck all checkboxes', () => {
    cy.get<HTMLInputElement>('.pref-list__checkbox input').then($checkboxes => {
      const checkboxesCount = $checkboxes.length;
      const halfCheckboxesCount = Math.floor(checkboxesCount / 2);

      const randomIndexes = Cypress._.sampleSize(
        Cypress._.range(checkboxesCount),
        halfCheckboxesCount,
      );
      randomIndexes.forEach(index => {
        cy.wrap($checkboxes.eq(index)).check();
      });

      cy.screenshot();

      cy.get('.recharts-default-legend li').should(
        'have.length',
        halfCheckboxesCount,
      );
      cy.get('.recharts-layer.recharts-line').should(
        'have.length',
        halfCheckboxesCount,
      );

      cy.get<HTMLInputElement>('.pref-list__checkbox input').uncheck({
        force: true,
      });
      cy.get<HTMLInputElement>('.pref-list__checkbox input').should(
        'not.be.checked',
      );
      cy.get('.recharts-default-legend li').should('have.length', 0);
    });
  });
});
