import { test, expect } from '@playwright/test';

test('Google search Playwright TS tutorial', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Accept cookies if present
  try {
    await page.getByRole('button', { name: /accept/i }).click({ timeout: 3000 });
  } catch {}

  // Type query
  await page.getByRole('combobox', { name: /search/i }).fill('Playwright TypeScript tutorial');
  await page.keyboard.press('Enter');

  // Wait for results
  await page.waitForTimeout(2000);

  // Click first result
  const firstResult = page.locator('h3').first();
  await expect(firstResult).toBeVisible();
  await firstResult.click();

  // Print title
  // await expect(page.getByRole('heading', { name: 'TypeScript', exact: true })).toBeVisible();
  await expect(page.locator('h1')).toContainText('TypeScript');
  console.log('Opened Page Title:', await page.title());
});
