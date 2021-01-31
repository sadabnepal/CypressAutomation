class OrderProductPage {

    visit() {
        cy.visit('https://demo.nopcommerce.com/'); 
    }

    get SearchBox() {
        return cy.get('#small-searchterms');
    }

    get SearchBtn() {
        return cy.get('#small-search-box-form > .button-1');
    }

    get AddToCartBtn() {
        return cy.get('.button-2.product-box-add-to-cart-button');
    }

    get ProductQuantity() {
        return cy.get('#product_enteredQuantity_4');
    }

    get AddProductToCartBtn() {
        return cy.get('#add-to-cart-button-4');
    }

    get ShoppingCartMenu() {
        return cy.get('#topcartlink>a>.cart-label');
    }

    get ProductPrice() {
        return cy.get('.product-unit-price');
    }
}
export default new OrderProductPage()