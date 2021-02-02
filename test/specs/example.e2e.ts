import LoginPage from '../pageobjects/login';
import { SecurePageObj } from '../pageobjects/secure';

describe('My Login application', () => {
    before(() => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });

    it('should login with valid credentials', () => {
        expect(SecurePageObj.flashAlert).toBeExisting();
        expect(SecurePageObj.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


