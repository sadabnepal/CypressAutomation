describe('Validate all basic funcationality of Internet herokuapp', ()=> 
{
    it('Open the herokuapp and validate title', ()=> {
        cy.visit('http://the-internet.herokuapp.com/');  //open url
        cy.title().should('eq', 'The Internet');  //validate page title
    })

    it('Validate header of the page', ()=> {
        cy.get('.heading').should('be.visible'); //check if header is visible
    })

    it('Validate form authentication', ()=> {
        cy.get("#content>ul>li>a[href='/login']").click();  //click on login link
        cy.get('#username').type("tomsmith"); //enter username
        cy.get('#password').type("SuperSecretPassword!");  //enter password
        cy.get('[type=submit]').click(); //click on submit button
        cy.wait(2000);
        cy.get('.flash').should('contain', 'You logged into a secure area!');  //validate login success message
        cy.get("[href='/logout']").click();  //logout
        cy.wait(2000);
        cy.get('.flash').should('contain', 'You logged out of the secure area!'); //validate logout message
    })

    it('Validate alert popup', ()=> {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts'); //open alert page
        cy.get("[onClick='jsAlert()']").click(); //click on alert button

        //Validating alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        });
        cy.get('#result').contains('You successfuly clicked an alert');
    })

    it('Validate confirmation popup', ()=> {
        cy.get("[onclick='jsConfirm()']").click();  //click on confirmJS popup button
        //Validating confirmation popup message
        cy.on('window:confirm', (str)=> {
            expect(str).to.eq('I am a JS Confirm');
        });
        cy.get('#result').contains('You clicked: Ok');  //validating text message displayed for action 
    })

    it('Validate page navigation', ()=> {
      cy.visit('http://the-internet.herokuapp.com/');   //open herokuapp homepage
      cy.url().should('eq', 'http://the-internet.herokuapp.com/');
      cy.get("#content>ul>li>a[href='/checkboxes']").click();   //redirect to Checkbox page
      cy.url().should('eq', 'http://the-internet.herokuapp.com/checkboxes');

      cy.go('back'); //back to homepage
      cy.url().should('eq', 'http://the-internet.herokuapp.com/');
      cy.go('forward'); //forwarded to Checkbox page
      cy.url().should('eq', 'http://the-internet.herokuapp.com/checkboxes');
      cy.go('back'); //back to homepage
      cy.reload(); //reload the homepage
    })

    it('Validate webtable', ()=> {
        cy.visit('http://the-internet.herokuapp.com/');
        cy.get("#content>ul>li>a[href='/tables']").click();   //click on sortable link

        //validate value presence in any td
        cy.get('#table2').contains('td', 'fbach@yahoo.com').should('be.visible');

        //validate value presence in particular row and column
        cy.get('#table2>tbody>tr:nth-child(1)>td:nth-child(3)').contains('jsmith@gmail.com').should('be.visible');

        //find website based on last name of the table of 'http://the-internet.herokuapp.com/tables'
        cy.get('#table2>tbody>tr td.last-name').each(($lname, index, $list) => {          
            const lastname = $lname.text();
            if(lastname.includes('Doe')) {
                cy.get('#table2>tbody>tr td:nth-child(5)').eq(index).then(function(webname){
                    const websitename = webname.text();
                    expect(websitename).to.equals('http://www.jdoe.com');
                })
            }
        })
    })

})