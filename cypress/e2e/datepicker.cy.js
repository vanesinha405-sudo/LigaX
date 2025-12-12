import { DataPickerPage } from "../../Pages/ReportedContent/dataPickerPage";
import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();
let dataPickerPage = new DataPickerPage();

describe("Date Picker Verification", () => {

    it("should select a date and verify it", () => {

         cy.visit('https://test-admin.ligax.io/secure');
        loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
       

        cy.visit("https://test-admin.ligax.io/secure/dashboard/reported-content");

        const date = {
            year: 2025,
            monthIndex: 3, // April (0 = Jan)
            day: 15
        };
           dataPickerPage.pickDate(date);

        // Expected UI format (adjust based on your app)
        const expectedValue = "04/15/2025";

        dataPickerPage.elements.dateInput().should('have.value', '04/15/2024');
    });
});