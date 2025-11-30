import { test, expect } from '@playwright/test';

test('Element locators', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  const hed = await page.getByRole('heading', { name: 'Installation' });
  console.log(await hed.textContent());
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  const hed2 = await page.getByRole('heading', { name: 'Writing tests' });
  console.log(await hed2.textContent());
  await page.getByRole('link', { name: 'How to write the first test' }).click();
  await expect(page.locator('#first-test')).toContainText('First test');
  console.log(await page.getByRole('heading', { name: 'First testDirect link to' }).textContent());
});
