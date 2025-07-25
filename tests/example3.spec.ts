import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link',   async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await console.log("Launch the url");
  await page.getByRole('link', { name: 'Get started' }).click();
  await console.log("Click on the get started");
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await console.log("validated");
});


test("Login into the application", async ()=>{
  // launch the url - Terminated over here in selenium
  // fill the username 
  // fill the password
  // click the login button
})

// Websocket(Playwright) and http (selenium)

