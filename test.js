const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto('https://www.facebook.com');
  await page.screenshot({path: 'ss.png'});
  const page1 = await browser.newPage();
  await page1.goto('https://www.gmail.com');
  await page1.waitFor(5000);
  await page1.close();
  // await browser.close();
})();