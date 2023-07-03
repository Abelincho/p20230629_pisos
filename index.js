//console.log("Superintendente Vicente");

const { chromium } = require('playwright');

async function run() {
  // Iniciar la instancia del navegador Chromium
  const browser = await chromium.launch({ headless: false });

  // Crear un contexto en una nueva página
  const context = await browser.newContext();

  // Crear una página y navegar a Google
  const page = await context.newPage();
  await page.goto('https://www.google.com');

  // Esperar a que se cargue completamente la página
  await page.waitForURL();

  // Hacer clic en el botón rechazar cookies utilizando un selector de id
  await page.click('#W0wltc');

  
  //Pulsamos en el boton de acceso a gmail
  await page.locator('a:has-text("Gmail")').click();

  //Pulsamos en el boton de crear cuenta
  await page.locator('span:has-text("Crear cuenta")').click();
  //await page.waitForTimeout(500);
  //Pulsamos en el boton de para mi
  await page.locator('span:has-text("Para mi uso personal")').click();
  
  // Cerrar el navegador
  //await browser.close();
}

// Ejecutar la función principal
run().catch(console.error);
