//import { Profile } from "../../Pages/ReportedContent/Profile";
import { LoginPage } from "../../Pages/LoginPage";
import userAdmin from "../../fixtures/userAdmin.json";

let loginPage = new LoginPage();
//let profile= new Profile();
//expandmenu = cy.get("svg[data-testid='ListAltIcon']");


export default class Profile {

 clickExpandMenu() {

    loginPage.login(userAdmin.admin_user.username, userAdmin.admin_user.password);
    cy.get("svg[data-testid='ListAltIcon']").click();
     };
     
     clickProfile() {

    this.clickExpandMenu();
    cy.get("a[href='/secure/dashboard/reported-content/profiles']").click();
     };
        
}

 


