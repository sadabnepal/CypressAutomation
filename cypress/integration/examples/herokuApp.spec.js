import HerokuAppPage from "../Pages/HerokuAppPage" 

describe('Validate all basic funcationality of Internet herokuapp', ()=>  {
    it('Open the herokuapp and validate title', ()=> {
        HerokuAppPage.visit();
        cy.title().should('eq', 'The Internet');  //validate page title
    })

    it('Validate header of the page', ()=> {
        HerokuAppPage.pageHeader.should('be.visible'); //check if header is visible
    })

    it('Validate form authentication', ()=> {
        HerokuAppPage.clickOnFormAuthenticationMenu();  //click on login link
        HerokuAppPage.UserNameTextbox.type("tomsmith"); //enter username
        HerokuAppPage.PasswordTextbox.type("SuperSecretPassword!");  //enter password
        HerokuAppPage.SubmitBtn.click(); //click on submit button
        HerokuAppPage.Flash.should('contain', 'You logged into a secure area!');  //validate login success message
        HerokuAppPage.LogoutBtn.click();  //logout
        HerokuAppPage.Flash.should('contain', 'You logged out of the secure area!'); //validate logout message
    })

    it('Validate alert popup', ()=> {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts'); //open alert page
        HerokuAppPage.JSalertBtn.click(); //click on alert button

        //Validating alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        });
        HerokuAppPage.AlertResult.contains('You successfuly clicked an alert');
    })

    it('Validate confirmation popup', ()=> {
        HerokuAppPage.JSalertCofirmBtn.click();  //click on confirmJS popup button
        //Validating confirmation popup message
        cy.on('window:confirm', (str)=> {
            expect(str).to.eq('I am a JS Confirm');
        });
        HerokuAppPage.AlertResult.contains('You clicked: Ok');  //validating text message displayed for action 
    })

    it('Validate page navigation', ()=> {
      cy.visit('http://the-internet.herokuapp.com/');   //open herokuapp homepage
      cy.url().should('eq', 'http://the-internet.herokuapp.com/');
      HerokuAppPage.CheckBoxMenuItem.click();   //redirect to Checkbox page
      cy.url().should('eq', 'http://the-internet.herokuapp.com/checkboxes');

      cy.go('back'); //back to homepage
      cy.url().should('eq', 'http://the-internet.herokuapp.com/');
      cy.go('forward'); //forwarded to Checkbox page
      cy.url().should('eq', 'http://the-internet.herokuapp.com/checkboxes');
      cy.go('back'); //back to homepage
      cy.reload(); //reload the homepage
    })

    it('Validate webtable', ()=> {
        HerokuAppPage.visit();
        HerokuAppPage.TableMenuItem.click();   //click on sortable link

        //validate value presence in any td
        HerokuAppPage.Table2.contains('td', 'fbach@yahoo.com').should('be.visible');

        //validate value presence in particular row and column
        HerokuAppPage.Table2Email1stItem.contains('jsmith@gmail.com').should('be.visible');

        //find website based on last name of the table of 'http://the-internet.herokuapp.com/tables'
        HerokuAppPage.Table2LastNames.each(($lname, index, $list) => {          
            const lastname = $lname.text();
            if(lastname.includes('Doe')) {
                HerokuAppPage.Table2Websites.eq(index).then(function(webname){
                    const websitename = webname.text();
                    expect(websitename).to.equals('http://www.jdoe.com');
                })
            }
        })
    })

})