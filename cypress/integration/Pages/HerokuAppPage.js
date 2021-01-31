class HerokuAppPage {

    visit() {
        cy.visit('http://the-internet.herokuapp.com/');
    }

    get pageHeader() {
        return cy.get('.heading');
    }

    clickOnFormAuthenticationMenu() {
        cy.getElement("#content>ul>li>a[href='/login']").click();
    }

    get UserNameTextbox() {
        return cy.get('#username');
    }

    get PasswordTextbox() {
        return cy.get('#password');
    }

    get SubmitBtn() {
        return cy.get('[type=submit]').click();
    }

    get Flash() {
        return cy.get('.flash', {timeout: 2000});
    }

    get LogoutBtn() {
        return cy.get("[href='/logout']");
    }

    get JSalertBtn() {
        return cy.get("[onClick='jsAlert()']");
    }

    get AlertResult() {
        return cy.get('#result');
    }

    get JSalertCofirmBtn() {
        return cy.get("[onclick='jsConfirm()']");
    }

    get CheckBoxMenuItem() {
        return cy.get("#content>ul>li>a[href='/checkboxes']");
    }

    get TableMenuItem() {
        return cy.get("#content>ul>li>a[href='/tables']");
    }

    get Table2() {
        return cy.get('#table2');
    }

    get Table2Email1stItem() {
        return cy.get('#table2>tbody>tr:nth-child(1)>td:nth-child(3)')
    }

    get Table2LastNames() {
        return cy.get('#table2>tbody>tr td.last-name');
    }

    get Table2Websites(){
        return cy.get('#table2>tbody>tr td:nth-child(5)');
    }
}
export default new HerokuAppPage()