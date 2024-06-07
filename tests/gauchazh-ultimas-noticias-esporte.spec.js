const { test } = require('@playwright/test');

test('Verificar últimas notícias de esporte na GauchaZH', async ({ page }) => {

  await page.goto('https://gaucha.clicrbs.com.br/esporte/');

  const manchetes = await page.locator('.noticia__titulo');

  if (Array.isArray(manchetes)) {
    for (const manchete of manchetes) {
      const textoManchete = await manchete.textContent();
      expect(textoManchete).toMatch(/esporte|futebol|basquete|vôlei|tênis/i);

      const dataPublicacao = await page.locator('.noticia__data').textContent();
      expect(dataPublicacao).toMatch(/\d{2}\/\d{2}\/\d{4}/);
    }
  } else {
    console.error('Erro: "manchetes" não é um array');
  }
});
