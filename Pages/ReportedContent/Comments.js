import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();


export default class Post {

 clickExpandMenu() {

    loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
    cy.get("svg[data-testid='ListAltIcon']").click();
     };
     
     clickComment() {

    this.clickExpandMenu();
    cy.get("a[href='/secure/dashboard/reported-content/comments']").click();
     };
        
}