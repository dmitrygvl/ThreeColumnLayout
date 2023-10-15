// const puppeteer = require("puppeteer");
// const { toMatchImageSnapshot } = require("jest-image-snapshot");

// expect.extend({ toMatchImageSnapshot });

// describe("Screenshot testing", () => {
//   let browser;
//   let page;

//   beforeAll(async () => {
//     browser = await puppeteer.launch();
//     page = await browser.newPage();
//   });
//   afterAll(async () => {
//     await browser.close();
//   });

//   test("homepage should match screenshot", async () => {
//     await page.goto("http://localhost:3000");
//     const screenshot = await page.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });
// });

//

const puppeteer = require("puppeteer");
const ScreenshotTester = require("puppeteer-screenshot-tester");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Screenshot testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      puppeteerArgs: { executablePath: "/Applications/Google Chrome.app/" },
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.evaluate(() => window.close()); //
  });

  test("homepage should match screenshot", async () => {
    await page.goto("http://localhost:3000");
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
