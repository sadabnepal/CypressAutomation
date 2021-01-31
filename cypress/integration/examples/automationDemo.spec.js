import AutomationDemoPage from "../Pages/AutomationDemoPage";

describe('Validate form register of Automation Demo Site', ()=> {

    it('Validate page header', ()=> {
        AutomationDemoPage.visit();
        cy.title('eq', 'Register');
    })

    it('Validate menu items', ()=> {
        AutomationDemoPage.HomeMenu.contains('Home');
        AutomationDemoPage.RegisterMenu.contains('Register');
        AutomationDemoPage.WebTableMenu.contains('WebTable');
        AutomationDemoPage.SwitchToMenu.contains('SwitchTo');
        AutomationDemoPage.WidgetMenu.contains('Widgets');
        AutomationDemoPage.InteractionMenu.contains('Interactions');
        AutomationDemoPage.VideoMenu.contains('Video');
        AutomationDemoPage.WYSIWYGMenu.contains('WYSIWYG');
        AutomationDemoPage.MoreMenu.contains('More');
        AutomationDemoPage.PractiseSiteMenu.contains('Practice Site');
    })

    it('Validate Full name input box', ()=> {
        AutomationDemoPage.RegisterPageHeader.contains('Register');
        AutomationDemoPage.FirstNameTextbox.type('testFirst');
        AutomationDemoPage.LastNameTextbox.type('testLast');
    })

    it("Validate address textarea", ()=> {
        AutomationDemoPage.AddressTextbox.type('AECS layout');
    })

    it('Validate email and phone input box', ()=> {
        AutomationDemoPage.EmailTextbox.type('test928@test.com');
        AutomationDemoPage.PhoneTextbox.type('1234566790');
    })
    
    it("Validate gender radio button", ()=> {
        AutomationDemoPage.MaleRadioBtn.click();
    })

    it('Validate Hobbies checkboxes', ()=> {    
        //check boxes one by one
        AutomationDemoPage.Checkbox1.check().should('be.checked').and('have.value', 'Cricket');
        AutomationDemoPage.Checkbox2.check().should('be.checked').and('have.value', 'Movies');
        AutomationDemoPage.Checkbox3.check().should('be.checked').and('have.value', 'Hockey');
        //uncheck boxes one by one
        AutomationDemoPage.Checkbox1.uncheck().should('not.be.checked');
        AutomationDemoPage.Checkbox2.uncheck().should('not.be.checked');
        AutomationDemoPage.Checkbox3.uncheck().should('not.be.checked');
        //check all box in one line
        AutomationDemoPage.Checkbox.check(['Cricket','Movies','Hockey']);
    })

    it('Validate Languages multiselect option', ()=> {
        AutomationDemoPage.Languages.click();
        AutomationDemoPage.LanguageListItem.contains('English').click();
        AutomationDemoPage.LanguageListItem.contains('Arabic').click();
        AutomationDemoPage.LanguageListItem.contains('Urdu').click();
        AutomationDemoPage.Password.click();
    })

    it('Validat skills dropdown', ()=> {
        AutomationDemoPage.Skills.select('Javascript').should('have.value', 'Javascript');
    })

    it('Validate Countries selection', ()=> {
        AutomationDemoPage.Countries.select('Nepal').should('have.value', 'Nepal');
    })

    it('Validate countries selection from searchable drop down', ()=> {
        AutomationDemoPage.CountriesDropDown.click();
        AutomationDemoPage.CountrySearchTextbox.type('India');
        AutomationDemoPage.CountrySearchTextbox.type('{enter}');
    })

    it('Validate date of bith dropdowns', ()=> {
        AutomationDemoPage.YearDropDown.select('1993').should('have.value', '1993');
        AutomationDemoPage.MonthDropDown.select('January').should('have.value', 'January');
        AutomationDemoPage.DayDropDown.select('1').should('have.value', '1');
    })

    it('Validate password fields', ()=> {
        AutomationDemoPage.Password.type('Test!@#345');
        AutomationDemoPage.ConfirmPassword.type('Test!@#345');
    })

    it('Validate form submission', ()=> {
       AutomationDemoPage.SubmitBtn.click();
    })

})