# Swag Labs Playwright Automation

Automated end-to-end testing for the [Swag Labs (SauceDemo)](https://www.saucedemo.com/) demo application using [Playwright](https://playwright.dev/). 

This project follows the Page Object Model (POM) design and covers login, product catalog, cart, checkout, and sidebar workflows.  

Test cases are based on the published [SwagLabs Documentation (Scribd PDF)](https://www.scribd.com/document/814076777/SwagLabs-Documentation).

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)  
- Page Object Model (POM) architecture  
- Utility wrapper for common actions (`CommonActions.js`)  
- Test coverage across login, inventory, cart, checkout, and sidebar  
- Easy Playwright configuration and HTML reporting  

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)  
- [npm](https://www.npmjs.com/)  

### Installation

    git clone https://github.com/your-username/swag-labs-playwright.git
    cd swag-labs-playwright
    npm install

### Running Tests

    npx playwright test

Run a specific spec:

    npx playwright test tests/login.spec.js

### Test Reports

    npx playwright show-report

## Project Structure

    .
    ├── pages/                  # Page Objects (LoginPage, InventoryPage, CartPage, etc.)
    │   └── PomManager.js        # Returns instances of pages
    ├── utils/                  # Shared utilities
    │   └── CommonActions.js     # Wrapper for navigation/click/fill/etc.
    ├── tests/                  # Test specs (grouped by feature)
    │   ├── login.spec.js
    │   ├── inventory.spec.js
    │   ├── shopping-cart.spec.js
    │   ├── check-out.spec.js
    │   └── side-bar.spec.js
    ├── playwright.config.js    # Playwright global config
    ├── package.json
    └── README.md


## Example Coverage

| Area        | Example Tests |
|-------------|---------------|
| **Login**   | Valid/invalid login, locked-out user, error messages |
| **Inventory** | Add/remove products, sort items, view product details |
| **Cart**    | Cart badge count, continue shopping, remove items |
| **Checkout** | Field validations, complete purchase |
| **Sidebar** | Links navigation (About, Logout, Reset state) |

## Customization

- Update test data and base URL in `playwright.config.js`  
- Add new tests in `tests/`  
- Extend or update page objects in `pages/`  

## Resources

- [Playwright Docs](https://playwright.dev/docs/intro)  
- [Swag Labs Demo](https://www.saucedemo.com/)  
- [SwagLabs Documentation (Scribd PDF)](https://www.scribd.com/document/814076777/SwagLabs-Documentation)  

## License

MIT  
For learning and portfolio purposes.  















<!-- # Swag Labs Playwright

Automated end-to-end testing for the Swag Labs demo application using [Playwright](https://playwright.dev/).

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model structure
- Test coverage for login, product, and cart workflows
- Easy configuration and reporting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/your-username/swag-labs-playwright.git
cd swag-labs-playwright
npm install
```

### Running Tests

```bash
npx playwright test
```

### Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/           # Test specs
├── pages/           # Page objects
├── playwright.config.js
├── package.json
└── README.md
```

## Customization

- Update test data and environment in `playwright.config.js`.
- Add new tests in the `tests/` directory.

## Resources

- [Playwright Docs](https://playwright.dev/docs/intro)
- [Swag Labs Demo](https://www.saucedemo.com/)

## License

MIT -->