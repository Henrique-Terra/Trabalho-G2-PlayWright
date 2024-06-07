const { test } = require('@playwright/test');

test('Verificar redirecionamento ao clicar em manchete', async ({ page }) => {

  page.setDefaultTimeout(60000);


  await page.goto('https://www.uol.com.br/esporte/');

  
  const mancheteDestaque = await page.locator('.manchete__titulo');
  const isVisible = await mancheteDestaque.isVisible();

  if (!isVisible) {
    console.error('Erro: Manchete em destaque não encontrada');
    return;
  }

 
  await mancheteDestaque.waitForVisible();


  const isEnabled = await mancheteDestaque.isEnabled();

  if (!isEnabled) {
    console.error('Erro: Manchete em destaque não está clicável');
    return;
  }


  await mancheteDestaque.click();

});
