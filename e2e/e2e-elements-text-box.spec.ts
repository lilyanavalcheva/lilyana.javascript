import { test, expect } from '@playwright/test'

test.describe.parallel('Text Box', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Elements').click()
        await page.getByRole('listitem', { name: 'Text Box'})
    })
    test('Text Box label', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        const label = await page.locator('.playgound-header')
        await expect(label).toContainText('Text Box')
    })
    test('Full name field', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        const fullName = await page.locator('#userName')
        await expect(fullName).toBeEditable()
    })
    test('Email name field', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        const email = await page.locator('#userEmail')
        await expect(email).toBeEditable()
    })
    test('Current Address field', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        const currentAddress = await page.locator('#currentAddress')
        await expect(currentAddress).toBeEditable()
    })
    test('Permanent Address field', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        const permanentAddress = await page.locator('#permanentAddress')
        await expect(permanentAddress).toBeEditable()
    })
    test('Text Box valid inputs', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        await page.type('#userName', 'Lilyna')
        await page.type('#userEmail', 'email@example.com')
        await page.type('#currentAddress', 'Varna')
        await page.type('#permanentAddress', 'Kazanlak')
        await page.click('#submit')

        const table = await page.locator('#name')
        await expect(table).toBeVisible()
    })
    test('Text Box invalid inputs', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        await page.type('#userName', 'Lilyna')
        await page.type('#userEmail', 'asdfghjkl')
        await page.type('#currentAddress', 'Varna')
        await page.type('#permanentAddress', 'Kazanlak')
        await page.click('#submit')

        const error = await page.locator('.field-error')
        await expect(error).toBeVisible()
    })  
})