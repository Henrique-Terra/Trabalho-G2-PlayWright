const { test } = require('@playwright/test');

test('Verificar últimas notícias de esporte na GauchaZH', async ({ page }) => {
  // Dado que acesso a seção de últimas notícias de esporte
  await page.goto('https://gaucha.clicrbs.com.br/esporte/');

  // Então verifico se as manchetes das notícias são relevantes e atualizadas
  const manchetes = await page.locator('.noticia__titulo');

  // Verifica se "manchetes" é um array
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
