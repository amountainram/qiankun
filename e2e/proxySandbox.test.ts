import test, {expect} from '@playwright/test';

const baseUrl = 'http://localhost:8080/';

test.describe('loading sandbox pure html application', () => {
  test(`
    shoud run the application scripts without throwing
    on missing Node impl for patched document
  `, async ({page}) => {
    await page.goto(baseUrl);
    await page.waitForURL(/http:\/\/localhost:8080\/home\/?/);

    await expect(page.getByText('Application', {exact: true})).toBeVisible();
  });
});