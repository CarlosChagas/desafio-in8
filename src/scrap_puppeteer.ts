import puppeteer from 'puppeteer';

async function getDataFromSite() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

  const resultsSelector: any = ' .price, .thumbnail a, .thumbnail img, .description, .ratings p'
  const data = await page.evaluate((resultsSelector) => {
    return [...document.querySelectorAll(resultsSelector)].map(laptop => {
      const title = laptop.textContent.split('|')[0].trim();
      if (laptop.className == "title") {
        return `${laptop.href}`
      } else if (laptop.className == "img-responsive") {
        return `${laptop.src}`
      }
      return `${title} `;
    });
  }, resultsSelector);

  await browser.close();
  let laptops = await dataConverter(data)

  return laptops

};

async function dataConverter(data: Array<string>) {
  let laptops: ILaptops[] = []
  for (var i = 0; i < data.length; i++) {
    let img = data[i]
    let price = parseFloat(data[i++ + 1].replace(/[$]/g, ''))
    let link = data[i++ + 1]
    let description = data[i++ + 1]
    let review = data[i++ + 1]
    i++

    laptops.push({ img: img, price: price, link: link, description: description, review: review })
  }
  return laptops
}

async function filterByBrand(brand: string) {
  let laptops = await getDataFromSite()
  laptops = laptops.filter((laptop) => {
    if (laptop.description.includes(brand)) {
      return laptop
    }

  })
  return laptops
}


export default {
  getDataFromSite,
  filterByBrand

}