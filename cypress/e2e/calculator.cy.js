describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('Do the number buttons update the display of the running total?', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3');
    cy.get('#number4').click();
    cy.get('.display').should('contain', '34');
  });

  it('Do the arithmetical operations update the display with the result of the operation?', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '10');

  });

  it('Can multiple operations be chained together?', () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '11');
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '33');

  });

  it('Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?', () => {
    cy.get ('#number4').click();
    cy.get ('#number4').click();
    cy.get ('#number4').click();
    cy.get('.display').should('contain', '444');

    cy.get('#clear').click();
    cy.get('#clear').click();

    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-90');

    cy.get('#clear').click();
    cy.get('#clear').click();

    cy.get('#number9').click();
    cy.get('#decimal').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '9.4');

    cy.get('#clear').click();
    cy.get('#clear').click();

    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '2.7812838944369352e+32');

  });

  it('When you divide by zero it should show an error', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR');


  })


})