import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import loginPage from '../pageobjects/login.page';
import { registroTask } from '../tasks/registroTask';
import {expect as assert} from 'chai';
import { expect } from 'chai';
const RegistroTask = new registroTask();

const pages = {
    login: LoginPage
}




Given(/^I am on the (\w+) page$/, async (page) => {
    await loginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    //await expect(SecurePage.flashAlert).toBeExisting();
   // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^el usuario ingresa a la pagina de registro$/, async()=>{
    await LoginPage.open()
});
When(/^el usuario ingresa al modulo de registro$/, async () => {
    await RegistroTask.crearCuenta("Manuel", "Yepes", "3205227712", "123456", 10, 9, 1995, "2")
});
Then(/^el usuario ve el mensaje de registro exitoso$/, async () => {
    await expect("Bienvenido").to.equal("Bienvenidos")
});

