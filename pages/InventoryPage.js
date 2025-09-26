import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class InventoryPage {
  constructor(page) {
    this.actions = new CommonActions(page);
    this.page;

    this.pageTitle = page.getByText("Products");
  }

  async assertSuccessfulLogin() {
    expect(await this.actions.getUrl()).toContain("/inventory.html");
    expect(await this.actions.getText(this.pageTitle)).toContain("Products");
  }
}
