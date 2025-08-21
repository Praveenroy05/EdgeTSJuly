// Codegen - This is a tool inside Playwright
// Record and Playback tool
// To open the codegen - npx playwright codegen "url"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});


test('test1', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#checkBoxOption1').check();

  await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'NEW All Access plan' }).click();
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().locator('h1')).toContainText('All Access Subscription');
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().locator('h1')).toContainText('All Access Subscription');

  
  await page.getByRole('button', { name: 'Home' }).click();
});