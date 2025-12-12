//import userAdmin from "../fixtures/userAdmin.json";
import BasePage from "./BasePage";


export class  LoginPage {

    usernameInput = "input[name='username']";
    passwordInput = "input[name='password']";
    loginButton = "button[type='submit']";


    enterUsername(username) {
        BasePage.typeText(this.usernameInput, username);
    }

    enterPassword(password) {
        BasePage.typeText(this.passwordInput, password);
    }

    clickLoginButton() {
        BasePage.clickElement(this.loginButton);
    }


    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

}