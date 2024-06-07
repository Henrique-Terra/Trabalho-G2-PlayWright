const { test, expect } = require('@playwright/test');

test('Adicionar produto ao carrinho e verificar quantidade', async ({ page }) => {
  // Dado que acesso a página de login da SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Quando preencho os campos de usuário e senha com credenciais válidas
  const usernameInput = await page.locator('#user-name');
  await usernameInput.fill('standard_user');
  const passwordInput = await page.locator('#password');
  await passwordInput.fill('password');
  const loginButton = await page.locator('#login-button');
  await loginButton.click();

  // Verifico se sou redirecionado para a página inicial
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Swag Labs'); // "Swag Labs" é o título real

  // Clico no primeiro produto da lista
  const firstProductLink = await page.locator('.inventory_list > .product-container > .product-image-link');
  await firstProductLink.click();

  // Seleciono a quantidade desejada (1)
  const quantityInput = await page.locator('#add_to_cart_sauce_lab_backpack');
  await quantityInput.fill('1');

  // Adiciono o produto ao carrinho
  const addToCartButton = await page.locator('#add_to_cart_button');
  await addToCartButton.click();

  // Clico no ícone de carrinho
  const cartIcon = await page.locator('.shopping_cart_link');
  await cartIcon.click();

  // Verifico se a quantidade de itens no carrinho é 1
  const cartQuantity = await page.locator('.shopping_cart_badge');
  const cartQuantityText = await cartQuantity.textContent();
  expect(cartQuantityText).toBe('1');

  // **Adicionar bloco else para tratar erro de título inesperado (opcional):**
  if (pageTitle !== 'Swag Labs') {
    console.error('Título da página inesperado:', pageTitle);
  }
});
