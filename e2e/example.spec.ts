import { test, expect, Page } from '@playwright/test';

test.describe('Landing page', () => {
	test.beforeEach(async ({ page, baseURL }) => {
		if (typeof baseURL !== 'undefined') {
			await page.goto(baseURL);
		}
	});

	test('Renders landing title', async ({ page }) => {
		const title = await page.title();
		expect(title).toBe('Alpine Client');
	});
});
