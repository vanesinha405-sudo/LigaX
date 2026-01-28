import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();

describe('Login Module', function(){

    

    it('Login successfull',function() {

                
        loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
        cy.url().should('include', '/dashboard');
        

       
    });

    it ('Login unsuccessfull wrong username',function(){

         loginPage.login(userAdmin.wrong_username.username, userAdmin.wrong_username.password);
        cy.get("[class='MuiAlert-message css-1xsto0d'] div").should("have.text","Invalid Credentials");
       cy.log('User unable to sign in')

        
    });

     it ('Login unsuccessfull wrong password',function(){

       loginPage.login(userAdmin.wrong_password.username, userAdmin.wrong_password.password);
       cy.get("[class='MuiAlert-message css-1xsto0d'] div").should("have.text","Invalid Credentials");
       cy.log('User unable to sign in')
        


    });




});