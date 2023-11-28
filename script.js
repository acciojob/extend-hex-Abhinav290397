it('should extend short hex to full hex', () => {
  const shortHex = "#abc";
  const fullHex = "#aabbcc";

  cy.window().then((win) => {
    cy.stub(win, 'prompt').returns(shortHex);
    cy.stub(win, 'alert').as('alert');
  });

  cy.visit(baseUrl);

  cy.get('@alert').should('have.been.calledWith', fullHex);
});

const extendHex = (shortHex) => {
  // write your code here
	String str = "";
	for(let i=0;i<shortHex.length;i++){
		if(shortHex.charAt(i) == '#')continue;
		str += shortHex.charAt(i) + shortHex.charAt(i);
	}
	str = "#".concat(str);
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
