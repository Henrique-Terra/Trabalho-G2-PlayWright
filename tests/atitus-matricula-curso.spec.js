const { test } = require('@playwright/test');

test('Matrícula em curso bem-sucedida na Atitus', async ({ page }) => {
  // Aumenta o tempo limite do teste para 60 segundos
  page.setDefaultTimeout(60000);

  // Dado que acesso a página de um curso na Atitus
  await page.goto('https://www.atitus.com.br/cursos/curso-exemplo');

  // Verifica se o botão de matrícula está presente
  const matricularButton = await page.locator('.btn-matricular');
  const isVisible = await matricularButton.isVisible();

  if (!isVisible) {
    console.error('Erro: Botão de matrícula não encontrado');
    return;
  }

  // Aguarda a visibilidade do botão de matrícula
  await matricularButton.waitForVisible();

  // Verifica se o botão de matrícula está clicável
  const isEnabled = await matricularButton.isEnabled();

  if (!isEnabled) {
    console.error('Erro: Botão de matrícula não está clicável');
    return;
  }

  // Clica no botão de matrícula
  await matricularButton.click();

});
