//console.log("Superintendente Vicente");

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ headless: false });
  const page = await context.newPage({ devtools: true });
  page.once('load', () => console.log('Página Cargada! :D'));
  await page.goto('https://www.idealista.com/venta-viviendas/leon-leon/mapa');
  
  const selector = '.get-all.sublocations-see-all.action-link';
  const element = await page.$(selector);
  const text = await element.textContent();

  console.log('Texto del elemento: ', text);
  
  await browser.close();
})();
