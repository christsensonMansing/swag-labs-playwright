import { test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Valid test cases", async () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);

    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
  });

  test("TC11: Verify that the selected item is successfully added to the cart", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack");
    await pm.inventoryPage.assertCartNumber(1);
  });

  test("TC12: Verify that the user cannot add more than one quantity of the same item", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack");
    await pm.inventoryPage.assertAddedToCart("Sauce Labs Backpack");
  });

  test("TC13: Verify that clicking on an item displays the correct description", async () => {
    await pm.inventoryPage.viewProduct("Sauce Labs Backpack");
    await pm.productPage.assertCorrectProduct(
      "Sauce Labs Backpack",
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      '$29.99'
    );
  });

  test("TC14: Verify that an item can be removed from the cart", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack");
    const cartNumber = await pm.inventoryPage.getCartNumber()
    await pm.cartPage.openCart()
    await pm.cartPage.removeFromCart("Sauce Labs Backpack")
    await pm.inventoryPage.assertCartNumber(cartNumber - 1)
  });

  test("TC15: Verify that the user can return to the product page and add more items", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack");
    await pm.cartPage.openCart()
    await pm.cartPage.continueShopping()
    await pm.inventoryPage.addToCart("Sauce Labs Bike Light");
    await pm.inventoryPage.assertCartNumber(2)
  });

  test("TC16: Ensure that the cart icon shows the correct number of items", async () => {
    await pm.inventoryPage.addToCart("Sauce Labs Backpack");
    await pm.inventoryPage.addToCart("Sauce Labs Bike Light");
    await pm.inventoryPage.assertCartNumber(2)
  });



  test.describe("Invalid test cases", async () => {
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);

      await pm.loginPage.navigate();
      await pm.loginPage.login("standard_user", "secret_sauce");
    });

    test("TC12: Verify that the user cannot add more than one quantity of the same item", async () => {
      await pm.inventoryPage.addToCart("Sauce Labs Backpack");
      await pm.inventoryPage.assertAddedToCart("Sauce Labs Backpack");
    });
  });


});
