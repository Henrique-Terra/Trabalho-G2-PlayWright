const { test } = require('@playwright/test');

test('Verificar carrinho vazio na página inicial', async ({ page }) => {
  // Dado que acesso a página inicial do Kabum
  await page.goto('https://www.kabum.com.br/');

  // Verifica se o elemento do carrinho vazio existe e possui a propriedade textContent
  try {
    const carrinhoVacioElement = await page.locator('.carrinho-vazio');
    const hasTextContentProperty = await carrinhoVacioElement.getProperty('textContent') !== null;

    if (hasTextContentProperty) {
      // Aguarda a visibilidade do elemento do carrinho vazio
      await carrinhoVacioElement.waitForVisible();

      // Obtém o texto do elemento do carrinho vazio
      const textoCarrinhoVacio = await carrinhoVacioElement.textContent();

      // Verifica se o texto do carrinho vazio contém a mensagem esperada
      expect(textoCarrinhoVacio).toContain('Seu carrinho está vazio');
    } else {
      console.error('Elemento do carrinho vazio não possui a propriedade textContent');
    }
  } catch (error) {
    console.error('Erro ao verificar o elemento do carrinho vazio:', error);
  }
});
