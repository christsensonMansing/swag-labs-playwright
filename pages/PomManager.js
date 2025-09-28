import LoginPage from "./LoginPage.js";
import InventoryPage from "./InventoryPage.js";
import ProductPage from "./ProductPage.js";
import CartPage from "./CartPage.js";
import SideBar from "./SideBar.js";
import CheckoutPage from "./CheckoutPage.js";

export default class PomManager {

  constructor(page){
    this.loginPage = new LoginPage(page)
    this.inventoryPage = new InventoryPage(page)
    this.productPage = new ProductPage(page)
    this.cartPage = new CartPage(page)
    this.sideBar = new SideBar(page)
    this.checkoutPage = new CheckoutPage(page)
  }

}