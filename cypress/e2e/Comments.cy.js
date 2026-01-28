
import Comments from "../../Pages/ReportedContent/Comments";


let comment = new Comments();


describe('Comments Module', function(){

 
it ("Verify Module", function() {

         comment.clickComment();
        cy.url().should('include', '/comments');

});
it ("should select Solved status", () => {

        
        comment.clickComment();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Solved").click();

        });

        it ("should select Unsolved status", () => {

         comment.clickComment();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("Unsolved").click();

     
        });
it ("should select ALL status", () => {

         
      comment.clickComment();
        cy.get("[id='select-report-status']").click();
        cy.get("[role='option']").contains("All").click();

     
        });

        it ("should select Reason Spam status", () => {

         
       comment.clickComment();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();

     
        });

         it ("should select two Reasons status", () => {

         
       comment.clickComment();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
     
        });
         it ("should select three Reasons status", () => {

         
       comment.clickComment();
        cy.get("[id='reason-multiple']").click();
        cy.get("[role='option']").contains("spam").click();
            cy.get("[role='option']").contains("copyright").click();
            cy.get("[role='option']").contains("other").click();
     
        });

         it ("Should select start date", () => {

         comment.clickComment();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2025')

           
        });

        it ("Insert select start date Invalid", () => {

         
        comment.clickComment();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('03-15-2026')


        });
        
        it ("Insert select End date", () => {

         
       comment.clickComment();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-08-2026')


        });

        it ("Insert select End date Invalid", () => {

         
       comment.clickComment();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2026')
        //cy.contains("The end date can't be less than start date").should('be.visible');

        });

         it ("select END DATE Invalid AND START DATE VALID", () => {

         
       comment.clickComment();
        cy.contains('label', 'End Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2027')
            cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025')
            cy.contains("The end date can't be less than start date").should('be.visible');
        });

        it ("select Clear buton", () => {
       
       comment.clickComment();
        cy.contains('label', 'Start Date').parent().find('input[placeholder="MM-DD-YYYY"]').type('01-09-2025');
        cy.contains("Clear").click();
        });


});