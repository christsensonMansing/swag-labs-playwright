import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions.js';

export default class CartPage {

  constructor(page){
    this.actions = new CommonActions(page)
    this.page = page

    this.cart = page.locator('.shopping_cart_link ')
    this.continueShoppingBtn = page.locator('#continue-shopping')
  }

  async openCart(){
    await this.actions.click(this.cart)
  }

  async removeFromCart(name){
    const product = await this.page.locator('.cart_item').filter({hasText: name})
    await this.actions.click(product.getByRole('button', {name: 'REMOVE'}))
  }

  async continueShopping(){
    await this.actions.click(this.continueShoppingBtn)
  }

}