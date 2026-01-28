import Post  from "../../Pages/ReportedContent/Post";
import { LoginPage } from "../../Pages/LoginPage";


//let loginPage = new LoginPage();
let post = new Post();


describe('Post Module', function(){

 
it ("Verify Module", function() {

         post.clickPost();
        cy.url().should('include', '/posts');

});
it("should select Solved status", () => {

        
        post.clickPost();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Solved").click();

        });

        it ("should select Unsolved status", () => {

         post.clickPost();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Unsolved").click();

     
        });
it ("should select ALL status", () => {

         
       post.clickPost();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("All").click();

     
        });

        it ("should select Reason Spam status", () => {

         
       post.clickPost();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();

     
        });

         it ("should select two Reasons status", () => {

         
       post.clickPost();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
     
        });
         it ("should select three Reasons status", () => {

         
       post.clickPost();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
            cy.get("[role='option']").contains("other").click();
     
        });

         it ("Should select start date", () => {

         post.clickPost();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2025')

           
        });

        it ("Insert select start date Invalid", () => {

         
        post.clickPost();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2026')


        });
        
        it ("Insert select End date", () => {

         
       post.clickPost();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-08-2026')


        });

        it ("Insert select End date Invalid", () => {

         
       post.clickPost();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2026')
        //cy.contains("The end date can't be less than start date").should('be.visible');

        });

         it ("select END DATE Invalid AND START DATE VALID", () => {

         
       post.clickPost();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2027')
            cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025')
            cy.contains("The end date can't be less than start date").should('be.visible');
        });

        it ("select Clear buton", () => {
       
       post.clickPost();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025');
        cy.contains("Clear").click();
        });


});