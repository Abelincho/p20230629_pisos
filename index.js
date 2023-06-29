//console.log("Superintendente Vicente");

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pageIndex = 'https://www.idealista.com/venta-viviendas/leon-leon/mapa';
  await page.goto(pageIndex);
  // Haz lo que necesites con la página
  await browser.close();
})();


