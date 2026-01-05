// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * EcoChain Playwright Test Configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  timeout: 30000,

  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Run local dev servers before starting tests */
  webServer: [
    {
      command: "cd server && npm run dev",
      url: "http://localhost:5000/api/items",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
    {
      command: "cd client && npm run dev",
      url: "http://localhost:5173",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
  ],
});
