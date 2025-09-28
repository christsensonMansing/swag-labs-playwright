import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class CheckoutPage {

  constructor(page){
    this.actions = new CommonActions(page)
    this.page = page

    this.cancelBtn = page.locator('#cancel')
    this.continueBtn = page.locator('#continue')
    this.finishBtn = page.locator('#finish')
    this.errorMsg = page.locator('.error-message-container')
    this.firstNameInput = page.locator('#first-name')
    this.lastNameInput = page.locator('#last-name')
    this.postalCodeInput = page.locator('#postal-code')
    this.pageTitle = page.locator('.title')
  }

  async cancelCheckout(){ 
    await this.actions.click(this.cancelBtn)
  }

  async continueCheckout(){
    await this.actions.click(this.continueBtn)
  } 

  async finishCheckout(){
    await this.actions.click(this.finishBtn)
  } 

  async fillUserDetails(firstName, lastName, code){
    await this.actions.fill(this.firstNameInput, firstName)
    await this.actions.fill(this.lastNameInput, lastName)
    await this.actions.fill(this.postalCodeInput, code)
  }

  async checkUrl(url) {
    expect(await this.actions.getUrl()).toContain(url);
  }

  async checkPageTitle(page){
    await expect(this.pageTitle).toHaveText(page)
  }

  async assertCorrectPage(url, page){
    await this.checkUrl(url)
    await this.checkPageTitle(page)
  }

  async assertErrorMsg(msg){
    await expect(this.errorMsg).toHaveText(msg)
  }

}