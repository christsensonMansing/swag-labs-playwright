import LoginPage from "./LoginPage.js";
import InventoryPage from "./InventoryPage.js";

export default class PomManager {

  constructor(page){
    this.loginPage = new LoginPage(page)
    this.inventoryPage = new InventoryPage(page)
  }

}