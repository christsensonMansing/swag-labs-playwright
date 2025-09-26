export default class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
    // await this.page.pause();
  }

  async fill(selector, text) {
    await selector.fill(text);
  }

  async click(selector) {
    await selector.click();
  }

  async getUrl() {
    return this.page.url();
  }

  async getText(selector) {
    return selector.textContent();
  }

  async selectOption(selector, value){
    await selector.selectOption(value)
  }

}
