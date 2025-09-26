import { test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;

test.describe("Valid test cases", () => {
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);

    await pm.loginPage.navigate();
    await pm.loginPage.login("standard_user", "secret_sauce");
  });

  test("TC07: To test that the products are sorted alphabetically from A to Z", async () => {
    const productNames = await pm.inventoryPage.getProductNames();
    const sortedProducts = [...productNames].sort();
    await pm.inventoryPage.assertCorrectSort(productNames, sortedProducts);
  });

  test("TC08: To test that the products are sorted alphabetically from Z to A", async () => {
    await pm.inventoryPage.selectFilter("za");
    const productNames = await pm.inventoryPage.getProductNames();
    const sortedProducts = [...productNames].sort().reverse();
    await pm.inventoryPage.assertCorrectSort(productNames, sortedProducts);
  });

  test("TC09: To test filter products by price low to high functionality", async () => {
    await pm.inventoryPage.selectFilter("lohi");
    const prices = await pm.inventoryPage.getPrices();
    const sortedPrices = await pm.inventoryPage.sortPrices('lohi', prices)
    await pm.inventoryPage.assertCorrectSort(prices, sortedPrices)
  });

  test("TC10: To test filter products by price high to low functionality", async () => {
    await pm.inventoryPage.selectFilter("hilo");
    const prices = await pm.inventoryPage.getPrices();
    const sortedPrices = await pm.inventoryPage.sortPrices('hilo', prices)
    await pm.inventoryPage.assertCorrectSort(prices, sortedPrices)
  });


});
