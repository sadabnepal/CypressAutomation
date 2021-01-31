class AutomationDemoPage {

    visit() {
        cy.visit("http://demo.automationtesting.in/Register.html")
    }

    get HomeMenu() { 
        return cy.get(".nav.navbar-nav>li>a[href='Index.html']", {timeout: 10000}) 
    }

    get RegisterMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='Register.html']");
    }

    get WebTableMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='WebTable.html']");
    }

    get SwitchToMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='SwitchTo.html']");
    }

    get WidgetMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='Widgets.html']");
    }

    get InteractionMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='Interactions.html']");
    }

    get VideoMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='SwitchTo.html']");
    }

    get WYSIWYGMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='WYSIWYG.html']");
    }

    get MoreMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='#']");
    }

    get PractiseSiteMenu() {
        return cy.get(".nav.navbar-nav>li>a[href='http://practice.automationtesting.in/']");
    }

    get RegisterPageHeader() {
        return cy.get('.container.center>h2');
    }

    get FirstNameTextbox() {
        return cy.get("[placeholder='First Name']");
    }

    get LastNameTextbox() {
        return cy.get("[placeholder='Last Name']");
    }

    get AddressTextbox() {
        return cy.get("[ng-model='Adress']");
    }

    get EmailTextbox() {
        return cy.get('#eid>input[type=email]');
    }

    get PhoneTextbox() {
        return cy.get("[ng-model='Phone']");
    }

    get MaleRadioBtn() {
        return cy.get('[type=radio][value=Male]');
    }

    get Checkbox1() {
        return cy.get('#checkbox1');
    }

    get Checkbox2() {
        return cy.get('#checkbox2');
    }

    get Checkbox3() {
        return cy.get('#checkbox3');
    }

    get Checkbox() {
        return cy.get('[type=checkbox]');
    }

    get Languages() {
        return cy.get('#msdd');
    }

    get LanguageListItem() {
        return cy.get('.ng-scope');
    }

    get Password() {
        return cy.get('#firstpassword');
    }

    get Skills() {
        return cy.get('#Skills');
    }

    get Countries() {
        return cy.get('#countries');
    }

    get CountriesDropDown() {
        return cy.get('[role=combobox]');
    }

    get CountrySearchTextbox() {
        return cy.get('.select2-search__field');
    }

    get YearDropDown() {
        return cy.get('#yearbox');
    }

    get MonthDropDown() {
        return cy.get("[placeholder='Month']");
    }

    get DayDropDown() {
        return cy.get('#daybox');
    }

    get ConfirmPassword() {
        return cy.get('#secondpassword')
    }

    get SubmitBtn() {
        return  cy.get('#submitbtn');
    }
}
export default new AutomationDemoPage()