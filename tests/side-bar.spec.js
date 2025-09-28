import { test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Valid test cases", async () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);

    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
  });

  test("TC17: Test the About button functionality of the sidebar", async () => {
    await pm.sideBar.navigateTo("About")
    await pm.sideBar.assertCorrectUrl("/saucelabs.com")
  });

  test("TC18: Test the Logout button functionality of the sidebar", async () => {
    await pm.sideBar.navigateTo("Logout")
    await pm.sideBar.assertCorrectUrl("https://www.saucedemo.com/")
  });

  test("TC19: Test the Reset App State button functionality of the sidebar", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack")
    await pm.sideBar.navigateTo("Reset App State")
    await pm.inventoryPage.assertCartNumber(0)
  });

});
