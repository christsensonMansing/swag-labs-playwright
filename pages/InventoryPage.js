import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class InventoryPage {
  constructor(page) {
    this.actions = new CommonActions(page);
    this.page = page;

    this.pageTitle = page.getByText("Products");
    this.filterSelect = page.locator(".product_sort_container");
    this.cartNumber = page.locator('.shopping_cart_badge')
  }


  //user authentication functions

  async assertSuccessfulLogin() {
    expect(await this.actions.getUrl()).toContain("/inventory.html");
    await expect(this.pageTitle).toHaveText('Products')
  }



  //product catalog functions

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



  // shopping cart functions

  async addToCart(name){
    const product = await this.page.locator('.inventory_item').filter({hasText: name})
    await this.actions.click(product.getByRole('button', {name: 'ADD TO CART'}))
  }

  async viewProduct(name){
    await this.actions.click(this.page.getByRole('link', { name: name }))
  }

  async getCartNumber(){
    const isVisible = await this.cartNumber.isVisible()
    return isVisible ? await this.actions.getText(this.cartNumber) : 0
  }

  async assertCartNumber(number){
    const cartNumber = (await this.getCartNumber()).toString()
    expect(cartNumber.trim()).toEqual(number.toString())
  }
  
  async assertAddedToCart(name){
    const product = await this.page.locator('.inventory_item').filter({hasText: name})
    await expect(product.getByRole('button', {name: 'REMOVE'})).toBeVisible()
  }

  
}
