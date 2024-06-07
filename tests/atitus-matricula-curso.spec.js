const { test } = require('@playwright/test');

test('Matrícula em curso bem-sucedida na Atitus', async ({ page }) => {
  page.setDefaultTimeout(60000);

  await page.goto('https://www.atitus.com.br/cursos/curso-exemplo');

  const matricularButton = await page.locator('.btn-matricular');
  const isVisible = await matricularButton.isVisible();

  if (!isVisible) {
    console.error('Erro: Botão de matrícula não encontrado');
    return;
  }

  await matricularButton.waitForVisible();

  const isEnabled = await matricularButton.isEnabled();

  if (!isEnabled) {
    console.error('Erro: Botão de matrícula não está clicável');
    return;
  }

  await matricularButton.click();

});
