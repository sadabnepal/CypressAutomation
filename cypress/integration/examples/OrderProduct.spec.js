describe('Validate search and order product', function() {
    
    it('Validate open application', ()=> {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce demo store');
    })

    it('Validate search product', ()=> {
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch');
        cy.get('#small-search-box-form > .button-1').click();
    })

    it('Validate add to cart', ()=> {
        cy.get('.button-2.product-box-add-to-cart-button').click();
        cy.get('#product_enteredQuantity_4').clear().type('3');
        cy.get('#add-to-cart-button-4').click();
        cy.wait(5000);
        cy.get('#topcartlink>a>.cart-label').click();
        cy.wait(3000);
    })

    it('Validate orderded product price', function() {           
        cy.get('.product-unit-price').contains('$1,800.00');
    })
})