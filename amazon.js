/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
try {
  (async () => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.in')

    await page.waitForSelector(".nav-a[href='/gp/bestsellers/?ref_=nav_cs_bestsellers']")
    await page.click(".nav-a[href='/gp/bestsellers/?ref_=nav_cs_bestsellers']")
    // await page.waitForXPath("//a[normalize-space()='Amazon Launchpad']")
    // await page.click("//a[normalize-space()='Amazon Launchpad']")
    // await page.type('#twotabsearchtextbox', 'mobile')
    // // await page.click('input.nav-input')

    // await page.click("//input[@id='nav-search-submit-button']")
    // await page.waitForSelector("div[class='autocomplete-results-container'] div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)");
    // await page.click("div[class='autocomplete-results-container'] div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)");

    // await page.waitForXPath("//span[normalize-space()='1-16 of over 1,000 results for']");

    // await page.screenshot({ path: 'amazon_nyan_cat_pullovers_list.png' })
    // //await page.click('#pagnNextString')
    // await page.waitForSelector('#resultsCol')
    // const pullovers = await page.$$('a.a-link-normal.a-text-normal')
    // await pullovers[2].click()
    // await page.waitForSelector('#ppd')
    // await page.screenshot({ path: screenshot })
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}