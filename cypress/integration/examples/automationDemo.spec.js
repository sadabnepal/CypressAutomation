describe('Validate form register of Automation Demo Site', ()=> {

    it('Validate page header', ()=> {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('.row>div>h1').contains('Automation Demo Site ');
    })

    it('Validate menu items', ()=> {
        cy.get(".nav.navbar-nav>li>a[href='Index.html']").contains('Home');
        cy.get(".nav.navbar-nav>li>a[href='Register.html']").contains('Register');
        cy.get(".nav.navbar-nav>li>a[href='WebTable.html']").contains('WebTable');
        cy.get(".nav.navbar-nav>li>a[href='SwitchTo.html']").contains('SwitchTo');
        cy.get(".nav.navbar-nav>li>a[href='Widgets.html']").contains('Widgets');
        cy.get(".nav.navbar-nav>li>a[href='Interactions.html']").contains('Interactions');
        cy.get(".nav.navbar-nav>li>a[href='SwitchTo.html']").contains('Video');
        cy.get(".nav.navbar-nav>li>a[href='WYSIWYG.html']").contains('WYSIWYG');
        cy.get(".nav.navbar-nav>li>a[href='#']").contains('More');
        cy.get(".nav.navbar-nav>li>a[href='http://practice.automationtesting.in/']").contains('Practice Site');
    })

    it('Validate Full name input box', ()=> {
        cy.get('.container.center>h2').contains('Register');
        cy.get("[placeholder='First Name']").type('testFirst');
        cy.get("[placeholder='Last Name']").type('testLast');
    })

    it("Validate address textarea", ()=> {
        cy.get("[ng-model='Adress']").type('AECS layout');
    })

    it('Validate email and phone input box', ()=> {
        cy.get('#eid>input[type=email]').type('test928@test.com');
        cy.get("[ng-model='Phone']").type('1234566790');
    })
    
    it("Validate gender radio button", ()=> {
        cy.get('[type=radio][value=Male]').click();
    })

    it('Validate Hobbies checkboxes', ()=> {    
        //check boxes one by one
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey');
        //uncheck boxes one by one
        cy.get('#checkbox1').uncheck().should('not.be.checked');
        cy.get('#checkbox2').uncheck().should('not.be.checked');
        cy.get('#checkbox3').uncheck().should('not.be.checked');
        //check all box in one line
        cy.get('[type=checkbox]').check(['Cricket','Movies','Hockey']);
    })

    it('Validate Languages multiselect option', ()=> {
        cy.get('#msdd').click();
        cy.get('.ng-scope').contains('English').click();
        cy.get('.ng-scope').contains('Arabic').click();
        cy.get('.ng-scope').contains('Urdu').click();
        cy.get('#firstpassword').click();
    })

    it('Validat skills dropdown', ()=> {
        cy.get('#Skills').select('Javascript').should('have.value', 'Javascript');
    })

    it('Validate Countries selection', ()=> {
        cy.get('#countries').select('Nepal').should('have.value', 'Nepal');
    })

    it('Validate countries selection from searchable drop down', ()=> {
        cy.get('[role=combobox]').click();
        cy.get('.select2-search__field').type('India');
        cy.get('.select2-search__field').type('{enter}');
    })

    it('Validate date of bith dropdowns', ()=> {
        cy.get('#yearbox').select('1993').should('have.value', '1993');
        cy.get("[placeholder='Month']").select('January').should('have.value', 'January');
        cy.get('#daybox').select('1').should('have.value', '1');
    })

    it('Validate password fields', ()=> {
        cy.get('#firstpassword').type('Test!@#345');
        cy.get('#secondpassword').type('Test!@#345');
    })

    it('Validate form submission', ()=> {
        cy.get('#submitbtn').click();
    })

})