import {test, expect} from '@playwright/test';

test('Demo Login Test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    // Fill in username
    await page.fill('#username', 'student');
    // Fill in password
    await page.fill('#password', 'Password123');
    // Click on the submit button
    await page.click('#submit');
    // Verify successful login by checking for the presence of the logout button
    const successMessage = page.locator('.post-title');
    await expect(successMessage).toHaveText('Logged In Successfully');
    console.log("Login successful and verified.");

})