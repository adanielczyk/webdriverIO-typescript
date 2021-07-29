import LoginPage from  '../pageobjects/login';
import SecurePage from '../pageobjects/secure';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        browser.url('http://localhost:8080');
        expect($('p').getText()).toBe('Hello World!');
    });
});
