const { test, expect } = require('@playwright/test');

const LOCAL_HOST_URL = "http://localhost:5173/"

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  // TODO: TERMINAR
});

