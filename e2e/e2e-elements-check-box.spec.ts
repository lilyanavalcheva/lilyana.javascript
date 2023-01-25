import { test, expect } from '@playwright/test'

test.describe.parallel('Check Box', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Elements').click()
        await page.getByRole('listitem', { name: 'Check Box'})
    })
    test('Check Box label', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')
        const label = await page.locator('.playgound-header')
        await expect(label).toContainText('Check Box')
    })
    test('Home folder', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')
        const home = await page.locator('.rct-title')
        await expect(home).toContainText('Home')
    })
    test('Clicked Check Box for Home folder', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')
        await page.getByText('Home').click()

        const message = await page.locator('.display-result')
        await expect(message).toBeVisible()
    })
    test('Not Clicked Check Box for Home folder', async ({ page}) => {
        await page.goto('https://demoqa.com/checkbox')

        const noMessage = await page.locator('.display-result')
        await expect(noMessage).not.toBeVisible()
    })
    test('Expand icon shows more folders', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')
        await page.getByRole('button', { name: 'Expand all'}).click()
        await page.getByRole('heading', { name: 'Desktop'})
        await page.getByRole('heading', { name: 'Notes'})
        await page.getByRole('heading', { name: 'Documents'})
        await page.getByRole('heading', { name: 'Office'})
        await page.getByRole('heading', { name: 'Downloads'})
    })
    test('Collapse icos hides folders', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')
        await page.getByRole('button', { name: 'Expand all'}).click()
        await page.getByRole('button', { name: 'Collapse all'}).click()
        
        const noFolders = await page.getByRole('heading', { name: 'Desktop'})
        await expect(noFolders).not.toBeVisible()
    })
})
