export default class BasePage {

    static typeText(selector, text) {
        cy.get(selector).type(text);
    }

    static clickElement(selector) {
        cy.get(selector).click();
    }

    asssertUrlContains(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }

    assertContainsText(selector, text) {
        cy.get(selector).should('contains', text);
    }

    
}