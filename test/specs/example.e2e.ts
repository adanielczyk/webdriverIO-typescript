import LoginPage from '../pageobjects/login';
import { SecurePageObj } from '../pageobjects/secure';

describe('My Login application', () => {
    before(() => {
        browser.enablePerformanceAudits()
        browser.url('https//google.com')
    });

    it('should login with valid credentials', () => {
        console.log(browser.getMetrics(), '---------------')
    });
});


