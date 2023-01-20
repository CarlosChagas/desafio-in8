import scrap_puppeteer from "../scrap_puppeteer"

async function getAllLaptops() {
    return await scrap_puppeteer.getDataFromSite()
}
async function getLaptopsByBrand(brand: string) {
    return await scrap_puppeteer.filterByBrand(brand)
}
export default {
    getAllLaptops,
    getLaptopsByBrand
}