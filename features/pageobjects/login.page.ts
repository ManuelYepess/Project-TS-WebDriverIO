import { $ } from '@wdio/globals'
import Page from './page';
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    login(username: any, password: any) {
        throw new Error('Method not implemented.');
    }
    /**
     * define selectors using getter methods
     */
   
    GENDER_RADIO_BUTTON = (fileName: string) => `(//input[@type='radio'])[${fileName}]`
    public get inputContraseña(){ return $("#pass")}
    public get inputEmail(){return $("#email")}
    public get buttonLogin(){return $("(//*[contains (text(), 'Iniciar sesión')])[1]")}
    public get createAccountButton(){return $("//a[@data-testid='open-registration-form-button']")}
    public get firstName(){return $("//input[@name='firstname']")}
    public get lastName(){return $("//input[@name='lastname']")}
    public get contactInformation(){return $("//input[@name='reg_email__']")}
    public get newPassword(){return $("#password_step_input")}
    public get daySelector(){return $("#day")}
    public get monthSelector(){return $("#month")}
    public get yearSelector(){return $("#year")}
    public get genderRadioButton(){return $("(//input[@type='radio'])[${}]")}
    public get registrarte(){return $("(//button[contains (text(), 'Registrarte')])[1]")}



    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();
