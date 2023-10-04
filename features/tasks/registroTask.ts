import loginPage, { LoginPage } from "../pageobjects/login.page";
import { browser } from '@wdio/globals'

export class registroTask extends LoginPage{
    static crearCuenta(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: string) {
        throw new Error('Method not implemented.');
    }
        /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */ 
    
        public async loginfacebook (email: string, pass: string) {
            await this.inputEmail.setValue(email);
            await browser.pause()
            await this.inputContraseña.setValue(pass);
            await browser.pause()
            await this.buttonLogin.click();
        }
        public async login (username: string, password: string) {
            await this.inputEmail.setValue(username);
            await this.inputContraseña.setValue(password);
            await this.buttonLogin.click();
        }
    public async crearCuenta(name: string,last_name:string,tel_email:string,password:string,day:number,month:number,year:number,sexo:string){
        await this.createAccountButton.click()
        await this.firstName.setValue(name)
        await this.lastName.setValue(last_name)
        await this.contactInformation.setValue(tel_email)
        await this.newPassword.setValue(password)
        await this.daySelector.selectByAttribute('value', day)
        await this.monthSelector.selectByAttribute('value', month)
        await this.yearSelector .selectByAttribute('value', year)
        await browser.pause(3000)
        await browser.$(this.GENDER_RADIO_BUTTON(sexo)).click()
        await browser.pause(3000)
        await this.registrarte.click()
        await browser.pause(5000)
    }
}
