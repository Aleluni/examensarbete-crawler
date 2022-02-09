const puppeteer = require("puppeteer");

async function scrapStuff(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(url);
  await page.goto(url);

  const [el] = await page.$x('//*[@id="ingredients"]');

  const result = await page.$$eval(".ingredients-list-group__card", (names) =>
    names.map((name) => name.textContent)
  );

  const reslutTxt = await result.jsonValue();
  console.log(result);

  //const src = await el.getPropery("src");
  //const srcTxt = await src.jsonValue();

  //console.log({ srcTxt });
}

scrapStuff(
  "https://www.ica.se/recept/gronsaksplat-med-kyckling-och-tzatziki-728523/"
);
