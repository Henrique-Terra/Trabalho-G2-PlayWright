const { test, expect } = require('@playwright/test');

test('Adicionar produto ao carrinho e verificar quantidade', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');


  const usernameInput = await page.locator('#user-name');
  await usernameInput.fill('standard_user');
  const passwordInput = await page.locator('#password');
  await passwordInput.fill('password');
  const loginButton = await page.locator('#login-button');
  await loginButton.click();


  const pageTitle = await page.title();
  expect(pageTitle).toBe('Swag Labs'); // "Swag Labs" é o título real

  const firstProductLink = await page.locator('.inventory_list > .product-container > .product-image-link');
  await firstProductLink.click();


  const quantityInput = await page.locator('#add_to_cart_sauce_lab_backpack');
  await quantityInput.fill('1');


  const addToCartButton = await page.locator('#add_to_cart_button');
  await addToCartButton.click();


  const cartIcon = await page.locator('.shopping_cart_link');
  await cartIcon.click();


  const cartQuantity = await page.locator('.shopping_cart_badge');
  const cartQuantityText = await cartQuantity.textContent();
  expect(cartQuantityText).toBe('1');

  if (pageTitle !== 'Swag Labs') {
    console.error('Título da página inesperado:', pageTitle);
  }
});
