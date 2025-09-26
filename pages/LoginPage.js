import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class LoginPage {
  constructor(page) {
    this.actions = new CommonActions(page);

    //locators
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "LOGIN" });
    this.errorMsg = page.getByTestId("error");
  }

  async navigate() {
    await this.actions.navigate("https://www.saucedemo.com/v1/index.html");
  }

  async login(username, password) {
    await this.actions.fill(this.usernameInput, username);
    await this.actions.fill(this.passwordInput, password);
    await this.actions.click(this.loginBtn);
  }

  async logiWithoutCredentials() {
    await this.actions.click(this.loginBtn);
  }

  async assertFailedLogin(msg) {
    expect(await this.actions.getText(this.errorMsg)).toContain(msg);
  }
}
