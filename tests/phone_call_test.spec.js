// Include playwright module
const { test, expect } = require('@playwright/test');

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

/**
 * Bakkappa N
 */
test('How to automate phone call in Plawright', async ({ page }) => {

    // Playwright actions

    // Make a phone call using Twilio
    await client.calls.create({
        twiml: process.env.TWIML_URL,
        to: process.env.TO_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER
    })
        .then(call => console.log(`Call SID: ${call.sid}`))
        .catch(error => console.error('Error making the call:', error));

    // Playwright actions
})

