//console.log("Superintendente Vicente");

const { chromium } = require('playwright');

async function run() {
    // Iniciar la instancia del navegador Chromium
    const browser = await chromium.launch({ headless: false });

    // Crear un contexto en una nueva página
    const context = await browser.newContext();

    // Crear una página y navegar a Google
    const page = await context.newPage();
    await page.goto('https://www.google.com/search?q=mochila+militar&client=firefox-b-d&sa=X&biw=1207&bih=553&tbm=shop&sxsrf=AB5stBjWhR0ZQYKFbtmLzANAjy8ygHRbBQ%3A1688483957035&ei=dTikZM-sAY3vkgXe5LyABw&ved=0ahUKEwiPu97zrPX_AhWNt6QKHV4yD3AQ4dUDCAc&uact=5&oq=mochila+militar&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQigUQsAMQQzoICAAQgAQQsAM6BwgAEIoFEEM6BwgAEA0QgARQqgZY4B5gjyRoAXAAeACAAaMBiAGfDpIBBDExLjaYAQCgAQHAAQHIAQo&sclient=products-cc');

    // Esperar a que se cargue completamente la página
    await page.waitForURL();

    // Hacer clic en el botón rechazar cookies utilizando un selector de id
    await page.click('button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.Nc7WLe');

    // Selector para los elementos 
    // que contienen cada producto
    const productSelector = 'div.sh-dgr__content';
    // Selector para los elementos que 
    // contienen la información que nos interesa de cada producto
    const nameSelector = 'h3.tAxDx'; //.text()
    const priceSelector = 'span.a8pemb.OFFNJ';//.text()
    const sellerSelector = 'div.aULzUe.IuHnof';
    const urlSelector = 'a.shntl'; //la url es el valor del atributo href. pero me sobran los 9 primeros caracteres
    const shippingSelector = 'div.vEjMR';

    // Obtener los elementos que contienen 
    //la información de cada producto
    //EL PROGRAMA FALLA EN QUE ESTO.. NO TIENE NASSS
    //NECESITO CREAR UN OBJETO QUE GUARDE Todos los productos. 
    // https://playwright.dev/docs/api/class-locator#locator-evaluate-all
    const productElements = await page.$$(productSelector);
    console.log(productElements);
    // Array para almacenar los productos
    const products = [];

    // Recorrer cada elemento de producto y extraer la información
    for (const element of productElements) {

        const name = await element.$eval(nameSelector, (el) => el.textContent.trim());
        const seller = await element.$eval(sellerSelector, (el) => el.textContent.trim());
        const price = await element.$eval(priceSelector, (el) => el.textContent.trim());
        const url = await element.$eval(urlSelector, (el) => el.textContent.trim());
        const shippingCost = await element.$eval(shippingSelector, (el) => el.textContent.trim());

        // Crear un objeto con los datos del producto y agregarlo al arreglo
        const product = {
            name,
            seller,
            price,
            url,
            shippingCost,
        };
        console.log(product); // Imprimir los datos del producto que va a incluir
        products.push(product);
        console.log('INCLUIDO:D');
    }

    

    // Cerrar el navegador
    await browser.close();
}

// Ejecutar la función principal
run().catch(console.error);
