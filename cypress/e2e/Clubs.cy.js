import Clubs from "../../Pages/ReportedContent/Clubs";

let Club = new Clubs();


describe('Clubs module', function(){


it ("Verify Module", function() {

         Club.clickClubs();
        cy.url().should('include', '/clubs');

});

it ("should select a country", () => {

         
       Club.clickClubs();
        cy.get("[id='search-by-country-code']").click();
        cy.contains('li', 'Afghanistan').click();
        //cy.get("[role='combobox']").contains("Afghanistan").click();
});


it ("should type a country name", () => {

         
       Club.clickClubs();
        //cy.get("[id='search-by-country-code']").click();
        //cy.get("[id='search-by-country-code']").clear();
        //cy.get("[id='search-by-country-code']").type('Bolivia');
        cy.get('#search-by-country-code')
        .click()
        .clear()
        .type('Bolivia');
        
});

it ("should type a wrong country name", () => {

         
       Club.clickClubs();
        
        cy.get('#search-by-country-code')
        .click()
        .clear()
        .type('abc');
        cy.contains("No options").should('be.visible');
        //cy.get("[id='search-by-country-code'] div").should("have.text","No options"); preguntar como buscar con id
       cy.log('No Options');
        
});



it ("should search by name", () => {

         
       Club.clickClubs();
        cy.get("[id='search-by-name']").click()
       .clear()
       .type('Boli');
});

it ("should search by wrong club name", () => {

         
       Club.clickClubs();
        cy.get("[id='search-by-name']").click()
       .clear()
       .type('jsus89');
      cy.contains("No results found").should('be.visible');
});

it ("should select right country name, right club name", () => {

         
       Club.clickClubs();
        cy.get("[id='search-by-country-code']").click();
        cy.contains('li', 'Afghanistan').click();
        cy.get("[id='search-by-name']").click()
       .clear()
       .type(' AfssureFC');
       
        
});

it ("should select right country name, wrong club name", () => {

         
       Club.clickClubs();
        cy.get("[id='search-by-country-code']").click();
        cy.contains('li', 'Afghanistan').click();
        cy.get("[id='search-by-name']").click()
       .clear()
       .type('jsus89');
       cy.contains("No results found").should('be.visible');
        
});

it ("select Clear buton", () => {
       
       Club.clickClubs();
       cy.get("[id='search-by-name']").click()
       .clear()
       .type('jsus89');
        //cy.contains("No results found").should('be.visible');
        cy.contains("Clear").click();
        
    
});

it ("should clear country field", () => {

         
       Club.clickClubs();
        cy.get('#search-by-country-code')
        .click()
        .clear()
        .type('Bolivia');
       cy.contains("Clear").click();
});


it ("should click add Club button", () => {

         
       Club.clickClubs();
       cy.contains('button', 'add new').click();
       cy.contains("Create Club").should('be.visible');
       
});

it ("should create a new club", () => {

         
       Club.clickClubs();
       cy.contains('button', 'add new').click();
       cy.contains("Create Club").should('be.visible');
        cy.get("[id='name-field']").click()
        .clear()
        .type('abc');
        cy.get("[id='country-code-field']").click();
        cy.contains('li', 'Afghanistan').click();
        cy.contains('button', 'Save').click();

       
});



})