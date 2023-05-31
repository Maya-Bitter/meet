import puppeteer from "puppeteer";

//const puppeteer = require('puppeteer');

//(async () => {
// const browser = await puppeteer.launch(); // Launches the browser
// const page = await browser.newPage(); // Opens a new tab
//await page.goto('https://example.com'); // Navigates to https://example.com
// await page.screenshot({ path: 'example.png' }); // Takes a screenshot and saves it as “example.png”

// await browser.close(); // Closes the browser
//})();

//const browser = await puppeteer.launch({
//headless: false,
//slowMo: 250 // slow down by 250ms
//});

describe("show/hide an event details", () => {});

test("An event element is collapsed by default", async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.waitForSelector(".event");

  const eventDetails = await page.$(".event .event__Details");
  expect(eventDetails).toBeNull();
  browser.close();
});

test("User can expand an event to see its details", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.waitForSelector(".event");
  await page.click(".event .details-btn");

  const eventDetails = await page.$(".event .event__Details");
  expect(eventDetails).toBeDefined();
  browser.close();
});
