import { test, expect } from '@playwright/test';
import { waitForAppReady, dismissInfoDialog, screenshot } from './helpers/app';

const CH = '01-getting-started';

test.describe.serial('Getting Started', () => {
  test('app loads successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissInfoDialog(page);

    await expect(page.locator('#preview-canvas')).toBeVisible();
    await expect(page.locator('#add-text')).toBeVisible();
    await expect(page.locator('#add-image')).toBeVisible();
    await expect(page.locator('#add-barcode')).toBeVisible();
    await expect(page.locator('#add-qr')).toBeVisible();

    await screenshot(page, CH, 1, 'app-loaded');
  });

  test('interface overview', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissInfoDialog(page);

    await expect(page.locator('#props-panel')).toBeVisible();
    await expect(page.locator('#label-size')).toBeVisible();
    await expect(page.locator('#connect-btn')).toBeVisible();
    await expect(page.locator('#print-btn')).toBeVisible();

    await screenshot(page, CH, 2, 'interface-overview');
  });

  test('shows saved labels on startup with blank label option', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.evaluate(() => {
      localStorage.setItem('phomymo_designs', JSON.stringify({
        'Kitchen Labels': {
          elements: [],
          labelSize: { width: 40, height: 30 },
          savedAt: Date.now(),
        },
      }));
      localStorage.setItem('phomymo_info_seen', 'true');
    });

    await page.reload({ waitUntil: 'networkidle' });
    await waitForAppReady(page);

    await expect(page.locator('#load-dialog')).toBeVisible();
    await expect(page.locator('.design-item[data-name="Kitchen Labels"]')).toBeVisible();
    await expect(page.locator('#load-new-blank')).toBeVisible();

    await page.locator('#load-new-blank').click();

    await expect(page.locator('#load-dialog')).toBeHidden();
    await expect(page.locator('#label-size')).toHaveValue('40x30');
  });
});
