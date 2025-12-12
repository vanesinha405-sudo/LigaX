import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();

describe('Login Module', function(){

    it('Login successfull',function() {

                
        cy.visit('https://test-admin.ligax.io/secure');
        loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
       
        cy.url().should('include', '/dashboard');
       


    });




});