//console.log("Superintendente Vicente");

const { firefox } = require('playwright');

(async () => {
  
  
  const browser = await playwright.firefox.launch()
  const page = await browser.newPage()
  await page.goto('https://www.google.com')
  await page.screenshot({path: 'x.png'})

  await browser.close()
}
)
