import { test, expect } from '@playwright/test'

test.describe.parallel('Landing page', async () => {
    test('Elements', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        //await page.locator('h5').nth(0).click()
        await page.getByText('Elements').click()
        //await page.getByRole('heading', { name: 'Elements' }).click()
        await page.getByRole('listitem', { name: 'Text Box'})
    })
    test('Forms', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Forms').click()
        await page.getByRole('listitem', { name: 'Practice Form'})
    })
    test('Alerts, Frame & Windows', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Alerts, Frame & Windows').click()
        await page.getByRole('listitem', { name: 'Browser Windows'})
    })
    test('Widgets', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Widgets').click()
        await page.getByRole('listitem', { name: 'Accordian'})
    })
    test('Interactions', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Interactions').click()
        await page.getByRole('listitem', { name: 'Sortable'})
    })
    test('Book Store Application', async ({ page }) => {
        await page.goto('https://demoqa.com/')
        await page.getByText('Book Store Application').click()
        await page.getByRole('listitem', { name: 'SLogin'})
    })
})
