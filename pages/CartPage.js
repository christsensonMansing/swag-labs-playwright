import CommonActions from '../utils/CommonActions.js';

export default class CartPage {

  constructor(page){
    this.actions = new CommonActions(page)
    this.page = page

    this.continueShoppingBtn = page.locator('#continue-shopping')
    this.checkoutBtn = page.locator('#checkout')
  }

  async removeFromCart(name){
    const product = await this.page.locator('.cart_item').filter({hasText: name})
    await this.actions.click(product.getByRole('button', {name: 'REMOVE'}))
  }

  async continueShopping(){
    await this.actions.click(this.continueShoppingBtn)
  }

  async checkout(){
    await this.actions.click(this.checkoutBtn)
  }

}