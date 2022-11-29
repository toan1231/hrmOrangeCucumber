package ui_automation.step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import ui_automation.pages.LoginPage;
import ui_automation.utilities.ConfigurationReader;
import ui_automation.utilities.Driver;
import ui_automation.utilities.SelectHelper;
import ui_automation.utilities.WaitHelper;

public class HrmOrangeStep {
    WebDriver driver= Driver.getInstance().getDriver();
    LoginPage loginPage=new LoginPage();


    @Then("I login with incorrect Credentials{string}{string}{string}")
    public void i_login_with_incorrect_Credentials(String username, String password, String incorrectCredentials) throws InterruptedException {
        driver.get(ConfigurationReader.getProperty("ui-config.properties","hrmOrange.url"));
        loginPage=new LoginPage();
        loginPage.login(username,password);
       String actualErrorText= loginPage.invalidCredentialText.getText();
        Assert.assertEquals("invalid credential not shown",incorrectCredentials,actualErrorText);
    }
    @Then("I login with correct Credentials")
    public void i_login_with_correct_Credentials() {
        driver.get(ConfigurationReader.getProperty("ui-config.properties","hrmOrange.url"));
        String username=ConfigurationReader.getProperty("ui-config.properties","hrmOrange.username");
        String password=ConfigurationReader.getProperty("ui-config.properties","hrmOrange.password");
        loginPage.login(username,password);
        int a=8;
        //ti bo cai nay di khong xao het



        driver.close();
    }

}

