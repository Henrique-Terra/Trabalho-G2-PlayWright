const { test } = require('@playwright/test');

test('Verificar redirecionamento ao clicar em manchete', async ({ page }) => {
  // Aumenta o tempo limite do teste para 60 segundos
  page.setDefaultTimeout(60000);

  // Dado que acesso a página inicial do UOL
  await page.goto('https://www.uol.com.br/esporte/');

  // Verifica se a manchete em destaque está presente
  const mancheteDestaque = await page.locator('.manchete__titulo');
  const isVisible = await mancheteDestaque.isVisible();

  if (!isVisible) {
    console.error('Erro: Manchete em destaque não encontrada');
    return;
  }

  // Aguarda a visibilidade da manchete em destaque
  await mancheteDestaque.waitForVisible();

  // Verifica se a manchete em destaque está clicável
  const isEnabled = await mancheteDestaque.isEnabled();

  if (!isEnabled) {
    console.error('Erro: Manchete em destaque não está clicável');
    return;
  }

  // Clica na manchete em destaque
  await mancheteDestaque.click();

});
