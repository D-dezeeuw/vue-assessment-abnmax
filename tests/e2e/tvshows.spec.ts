import { describe, test, it, expect, beforeAll, afterAll } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { createPage } from '@nuxt/test-utils'

describe('TV Shows page', () => {
  // Start Nuxt dev server or production build in test mode
  beforeAll(async () => {
    await setup({
      host: 'http://localhost:3000',
      server: true,
      browser: true, // enables browser context for createPage
    })
  })

  it('should display horizontal navigation with multiple items', async () => {
    const page = await createPage()

    // Navigate to tv-shows page
    await page.goto('http://localhost:3000/tv-shows')

    // Adjust selector to your nav bar class or element
    const nav = await page.$('[data-id="horizontal-nav"]')
    expect(nav).toBeTruthy()

    // Count nav links inside it
    const navItems = await nav!.$$('li')
    expect(navItems.length).toBeGreaterThan(5)

    // Check first nav item text and href
    const firstNavItem = navItems[0]
    const link = await firstNavItem!.$('a')
    const href = await link?.getAttribute('href')
    
    // Check that href is not empty and starts with /tv-show/
    console.log('href:', href);
    expect(href?.length).toBeGreaterThan(10)
    expect(href?.includes('tv-show')).toBe(true);

    await page.close()
  })

  it('should navigate to detail page when clicking nav item', async () => {
    const page = await createPage()
    await page.goto('http://localhost:3000/tv-shows')

    // Find first nav link and click
    const firstNavItem = await page.$('[data-id="horizontal-nav"] li:first-child > a')
    expect(firstNavItem).toBeTruthy()

    const href = await firstNavItem!.getAttribute('href')
    console.log('NEW HREF', 'http://localhost:3000' + href)
    await firstNavItem!.click()

    // Wait for navigation
    await page.waitForURL('http://localhost:3000' + (href || ''))
    await page.waitForSelector('h1[data-id="show-name"]', { state: 'visible' })

    // Check detail page header visible
    const h1 = await page.$('h1')
    const text = await h1?.textContent()
    
    expect(h1).toBeTruthy()
    expect(text?.length).toBeGreaterThan(3)

    await page.close()
  })
})
