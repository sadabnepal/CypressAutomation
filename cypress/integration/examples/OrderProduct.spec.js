import OrderProductPage from "../Pages/OrderProductPage";

describe('Validate search and order product', function() {
    
    it('Validate open application', ()=> {
        OrderProductPage.visit();
        cy.title().should('eq', 'nopCommerce demo store');
    })

    it('Validate search product', ()=> {
        OrderProductPage.SearchBox.type('Apple MacBook Pro 13-inch');
        OrderProductPage.SearchBtn.click();
    })

    it('Validate add to cart', ()=> {
        OrderProductPage.AddToCartBtn.click();
        OrderProductPage.ProductQuantity.clear().type('3');
        OrderProductPage.AddProductToCartBtn.click();
        cy.wait(5000);
        OrderProductPage.ShoppingCartMenu.click();
        cy.wait(3000);
    })

    it('Validate orderded product price', function() {           
        OrderProductPage.ProductPrice.contains('$1,800.00');
    })
})