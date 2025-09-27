import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class ProductPage {

  constructor(page){
    this.actions = new CommonActions(page)
    this.page = page

    this.productName = page.locator('.inventory_details_name')
    this.productDesc = page.locator('.inventory_details_desc')
    this.productPrice = page.locator('.inventory_details_price')
  }

  async assertCorrectProduct(name, desc, price){
    await expect(this.productName).toHaveText(name)
    await expect(this.productDesc).toHaveText(desc)
    await expect(this.productPrice).toHaveText(price)
  }

}