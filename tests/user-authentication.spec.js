import { test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Valid test cases", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test("TC01: Log in with valid username and password", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
    await pm.inventoryPage.assertSuccessfulLogin();
  });
});

test.describe("Invalid test cases", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
  });

  test("TC02: Log in with invalid username and valid password", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("invalid_username", "secret_sauce");
    await pm.loginPage.assertFailedLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("TC03: Log in with valid username and invalid password", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "invalid_password");
    await pm.loginPage.assertFailedLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("TC04: Log in with invalid username and invalid password", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("invalid_username", "invalid_password");
    await pm.loginPage.assertFailedLogin("Epic sadface: Username and password do not match any user in this service");
  });

  test("TC05: Log in without entering any credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.logiWithoutCredentials();
    await pm.loginPage.assertFailedLogin("Epic sadface: Username is required")
  });

  test("TC06: Log in with a locked out user credentials", async () => {
    await pm.loginPage.navigate();
    await pm.loginPage.login("locked_out_user", "secret_sauce");
    await pm.loginPage.assertFailedLogin("Epic sadface: Sorry, this user has been locked out.");
  });


});
