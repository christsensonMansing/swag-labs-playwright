import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class InventoryPage {
  constructor(page) {
    this.actions = new CommonActions(page);
    this.page = page;

    this.pageTitle = page.getByText("Products");
    this.filterSelect = page.locator(".product_sort_container");
  }

  async assertSuccessfulLogin() {
    expect(await this.actions.getUrl()).toContain("/inventory.html");
    expect(await this.actions.getText(this.pageTitle)).toContain("Products");
  }

  async selectFilter(value) {
    await this.actions.selectOption(this.filterSelect, value);
  }

  async getProductNames() {
    return await this.page.locator(".inventory_item_name").allTextContents();
  }

  async getPrices() {
    return await this.page.locator(".inventory_item_price").allTextContents();
  }

  async sortPrices(sort, prices) {
    let sortedArray;
    if (sort === "lohi") {
      sortedArray = [...prices].sort(
        (a, b) =>
          parseFloat(a. replace("$", "")) - parseFloat(b.replace("$", ""))
      );
    } else {
      sortedArray = [...prices].sort(
        (a, b) =>
          parseFloat(b.replace("$", "")) - parseFloat(a.replace("$", ""))
      );
    }

    return sortedArray;
  }

  async assertCorrectSort(actualArray, sortedArray) {
    expect(actualArray).toEqual(sortedArray);
  }
}
