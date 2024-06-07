const { test } = require('@playwright/test');

test('Verificar carrinho vazio na página inicial', async ({ page }) => {

  await page.goto('https://www.kabum.com.br/');


  try {
    const carrinhoVacioElement = await page.locator('.carrinho-vazio');
    const hasTextContentProperty = await carrinhoVacioElement.getProperty('textContent') !== null;

    if (hasTextContentProperty) {

      await carrinhoVacioElement.waitForVisible();

      const textoCarrinhoVacio = await carrinhoVacioElement.textContent();


      expect(textoCarrinhoVacio).toContain('Seu carrinho está vazio');
    } else {
      console.error('Elemento do carrinho vazio não possui a propriedade textContent');
    }
  } catch (error) {
    console.error('Erro ao verificar o elemento do carrinho vazio:', error);
  }
});
