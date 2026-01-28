import Profile  from "../../Pages/ReportedContent/Profile";
import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();
let profile = new Profile();


describe('Profile Module', function(){

 
it ("Report Status", function() {

         profile.clickExpandMenu();
        cy.url().should('include', '/dashboard');

});



   it("should select Solved status", () => {

        
        profile.clickProfile();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Solved").click();

        });

it ("should select Unsolved status", () => {

         profile.clickProfile();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Unsolved").click();

     
        });
it ("should select ALL status", () => {

         
       profile.clickProfile();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("All").click();

     
        });

        it ("should select Reason Spam status", () => {

         
       profile.clickProfile();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();

     
        });

         it ("should select two Reasons status", () => {

         
       profile.clickProfile();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
     
        });
         it ("should select three Reasons status", () => {

         
       profile.clickProfile();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
            cy.get("[role='option']").contains("other").click();
     
        });

        it ("Should select start date", () => {

         profile.clickProfile();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2025')

           
        });

        it ("Insert select start date Invalid", () => {

         
        profile.clickProfile();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2026')


        });
        
        it ("Insert select End date", () => {

         
       profile.clickProfile();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-08-2026')


        });

        it ("Insert select End date Invalid", () => {

         
       profile.clickProfile();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2026')
        //cy.contains("The end date can't be less than start date").should('be.visible');

        });

         it.only ("select END DATE Invalid AND START DATE VALID", () => {

         
       profile.clickProfile();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2027')
            cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025')
            cy.contains("The end date can't be less than start date").should('be.visible');
        });

        it ("select Clear buton", () => {
       
       profile.clickProfile();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025');
        cy.contains("Clear").click();
        });

});
