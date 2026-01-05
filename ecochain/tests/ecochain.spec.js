// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * EcoChain E2E Tests
 * Focused regression tests for core functionality
 */

// ============================================
// REGISTRATION TESTS
// ============================================

test.describe("Registration", () => {
  test("should display registration form correctly", async ({ page }) => {
    await page.goto("/register");

    // Check main elements are present
    await expect(page.locator("h1")).toContainText("Create your account");
    await expect(page.getByRole("button", { name: "Donor" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Receiver" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Create Account" })
    ).toBeVisible();
  });

  test("should show password mismatch error", async ({ page }) => {
    await page.goto("/register");

    // Fill form with mismatched passwords
    await page.locator('input[name="name"]').fill("Test Business");
    await page.locator('input[name="email"]').fill("test@example.com");
    await page.locator('input[name="phone"]').fill("+94771234567");
    await page.locator('textarea[name="address"]').fill("123 Test Street");
    await page.locator('input[name="password"]').fill("password123");
    await page.locator('input[name="confirmPassword"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Create Account" }).click();

    // Should show error
    await expect(page.getByText("Passwords do not match")).toBeVisible();
  });

  test("should register new donor successfully", async ({ page }) => {
    await page.goto("/register");

    const uniqueEmail = `testdonor_${Date.now()}@example.com`;

    await page.locator('input[name="name"]').fill("Playwright Test Donor");
    await page.locator('input[name="email"]').fill(uniqueEmail);
    await page.locator('input[name="phone"]').fill("+94771234567");
    await page
      .locator('textarea[name="address"]')
      .fill("123 Test Street, Colombo");
    await page.locator('input[name="password"]').fill("password123");
    await page.locator('input[name="confirmPassword"]').fill("password123");

    await page.getByRole("button", { name: "Create Account" }).click();

    // Should redirect to dashboard
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
  });
});

// ============================================
// LOGIN TESTS
// ============================================

test.describe("Login", () => {
  test("should display login form correctly", async ({ page }) => {
    await page.goto("/login");

    await expect(page.locator("h1")).toContainText("Welcome back");
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  });

  test("should show error for invalid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[type="email"]').fill("invalid@test.com");
    await page.locator('input[type="password"]').fill("wrongpassword");
    await page.getByRole("button", { name: "Sign In" }).click();

    // Should show error message or stay on login page
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/login/);
  });

  test("should login with valid donor credentials", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[type="email"]').fill("keells@ecochain.lk");
    await page.locator('input[type="password"]').fill("password123");
    await page.getByRole("button", { name: "Sign In" }).click();

    // Should redirect to dashboard
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
});

// ============================================
// NAVIGATION & AUTH FLOW TESTS
// ============================================

test.describe("Navigation", () => {
  test("should protect dashboard route", async ({ page }) => {
    // Try to access dashboard without login
    await page.goto("/dashboard");

    // Should redirect to login
    await expect(page).toHaveURL(/login/);
  });

  test("should logout successfully", async ({ page }) => {
    // Login first
    await page.goto("/login");
    await page.locator('input[type="email"]').fill("keells@ecochain.lk");
    await page.locator('input[type="password"]').fill("password123");
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });

    // Logout
    await page.getByRole("button", { name: "Logout" }).click();

    // Should be on home page
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("link", { name: "Sign In" }).first()
    ).toBeVisible();
  });
});

// ============================================
// CORE FEATURE TESTS
// ============================================

test.describe("Core Features", () => {
  test("should display home page correctly", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toContainText(
      "Connect. Share. Save Food."
    );
    await expect(
      page.getByRole("link", { name: "Sign In" }).first()
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Get Started/i }).first()
    ).toBeVisible();
  });

  test("should show dashboard items for receiver", async ({ page }) => {
    await page.goto("/login");
    await page.locator('input[type="email"]').fill("sarvodaya@ecochain.lk");
    await page.locator('input[type="password"]').fill("password123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });

    // Dashboard should load
    await expect(page.locator("main")).toBeVisible();
  });

  test("should navigate to post item page for donor", async ({ page }) => {
    await page.goto("/login");
    await page.locator('input[type="email"]').fill("keells@ecochain.lk");
    await page.locator('input[type="password"]').fill("password123");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });

    // Navigate to post item
    await page.getByRole("link", { name: /Post Item/i }).click();
    await expect(page).toHaveURL(/post/);
  });
});
