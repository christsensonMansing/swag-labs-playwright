import { test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Valid test cases", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);

    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
    await pm.inventoryPage.addToCart("Sauce Labs Backpack")
    await pm.inventoryPage.openCart()
  });

  test("TC20: Test that clicking the Checkout button takes the user to the checkout information page", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.assertCorrectPage('/checkout-step-one.html', 'Checkout: Your Information')
  });

  test("TC21: Test that clicking on the Cancel button during checkout returns the user to the cart page", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.cancelCheckout()
    await pm.checkoutPage.assertCorrectPage('/cart.html', 'Your Cart')
  });

  test("TC23: Test that entering valid information and continuing takes the user to the order overview page", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.fillUserDetails('Alishba', 'Mumtaz', '12345')
    await pm.checkoutPage.continueCheckout()
    await pm.checkoutPage.assertCorrectPage('/checkout-step-two.html', 'Checkout: Overview')
  });

  test("TC24: Test that clicking the Finish button that completes the order and shows the confirmation page", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.fillUserDetails('Alishba', 'Mumtaz', '12345')
    await pm.checkoutPage.continueCheckout()
    await pm.checkoutPage.finishCheckout()
    await pm.checkoutPage.assertCorrectPage('/checkout-complete.html', 'Checkout: Complete!')
  });

  test("TC25: Test that clicking the Finish button that completes the order and shows the confirmation page", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.fillUserDetails('Alishba', 'Mumtaz', '12345')
    await pm.checkoutPage.continueCheckout()
    await pm.checkoutPage.cancelCheckout()
    await pm.checkoutPage.assertCorrectPage('/inventory.html', 'Products')
  });

});


test.describe("Invalid test cases", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);

    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
    await pm.inventoryPage.addToCart("Sauce Labs Backpack")
    await pm.inventoryPage.openCart()
  });

  test("TC22: Test that an error message is displayed when the user tries to continue without filling the required fields", async () => {
    await pm.cartPage.checkout()
    await pm.checkoutPage.continueCheckout()
    await pm.checkoutPage.assertErrorMsg("Error: First Name is required")
  });



});

