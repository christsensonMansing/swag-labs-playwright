import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class SideBar {

  constructor(page){
    this.actions = new CommonActions(page)
    this.page = page

    this.sidebarBtn = page.locator('.bm-burger-button')
  }

  async navigateTo(name){
    await this.actions.click(this.sidebarBtn)
    await this.actions.click(await this.page.getByRole('link', {name: name}))
  }

  async assertCorrectUrl(url) {
    expect(await this.actions.getUrl()).toContain(url);
  }

}