import { test, expect } from '@playwright/test';

test('YouTube search test', async ({ page }) => {
  // Step 1: Navigate
  await page.goto('https://www.youtube.com');

  // Step 2: Accept cookies if popup appears
  try {
    await page.locator('button:has-text("I Agree")').click({ timeout: 3000 });
  } catch (error) {
    // ignore if popup does not appear
  }

  // Step 3: Search for "Playwright tutorial"
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright tutorial');
  // Step 4: Click search
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // Step 5: Fetch first result title
  const firstResult = page.locator('ytd-video-renderer h3 a').first();
  await firstResult.waitFor();

  const titleText = await firstResult.innerText();
  console.log("First Video Title:", titleText);

  // Step 6: Validate
  expect(titleText.toLowerCase()).toContain('playwright');
});
