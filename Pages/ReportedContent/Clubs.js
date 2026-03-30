import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();


export default class Clubs {

 clickExpandMenu() {

    loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
    cy.get("svg[data-testid='SportsSoccerIcon']").click();
     };
     
     clickClubs() {

    this.clickExpandMenu();
    cy.get("a[href='/secure/dashboard/clubs-divisions/clubs']").click();
     };
        
}