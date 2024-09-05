// Include playwright module
const { test } = require('@playwright/test');

const TOTP = require('otplib');

/**
 * Bakkappa N
 */
test('MFA Multi Factor Authentication Test', async ({ page }) => {

    // Generate MFA token
    const token = getAuthenticatorToken();

    // Go to URL
    await page.goto('https://mysignins.microsoft.com/');

    // Enter username
    await page.getByPlaceholder('Email or phone').click();
    await page.getByPlaceholder('Email or phone').fill(process.env.MFA_APP_USER);

    await page.getByRole('button', { name: 'Next' }).click();

    // Enter password
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.MFA_APP_PASSWORK);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByRole('link', { name: "I can't use my Microsoft Authenticator app right now" }).click();
    await page.getByRole('button', { name: 'Use a verification code' }).click();

    // Enter authenticator app code
    await page.getByPlaceholder('Code').click();
    await page.getByPlaceholder('Code').fill(token);
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();

    // Logout
    await page.getByLabel('Account manager for testers').click();
    await page.getByLabel('Sign out of this account').click();
});

function getAuthenticatorToken() {
    const secret = process.env.AUTHENTICATOR_SECRET;
    TOTP.authenticator.options = {
        step: 30, //default is 30 seconds
        window: 1 // acceptable time window
    }
    const otp = TOTP.authenticator.generate(secret);
    return otp;
}

