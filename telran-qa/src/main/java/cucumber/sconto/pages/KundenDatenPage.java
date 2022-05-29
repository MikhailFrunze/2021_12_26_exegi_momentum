package cucumber.sconto.pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import org.openqa.selenium.devtools.v85.cachestorage.model.Header;
import selenide.sconto.HeaderMenu;

import static com.codeborne.selenide.Selenide.$;

public class KundenDatenPage extends HeaderMenu {

    private static By Header= By.xpath("//*[@class='titleHeadline']");
    private static By personlichenDatenDropdown = By.xpath("//*[contains(text(),'persönlichen')]/following-sibling::div");
    private static By editButton = By.id("personalBtn");
    private static By saveButton = By.id("submitPersonalData");
    private static By vornameField = By.id("firstName");
    private static By firstNameFieldError = By.id("firstName-error");

    public SelenideElement getHeader(){
        return $(Header);
    }

    public void clickOnPersonlichenDaten(){
        $ (personlichenDatenDropdown).click();
    }

    public void clickOnEditButton(){
        $(editButton).click();
    }

    public SelenideElement getSaveButton(){
        return $(saveButton);
    }

    public void clickOnFirstNameField(){
        $(vornameField).click();
    }

    public void editFirstNameField(){
        $(vornameField).setValue("123");
    }

public SelenideElement getFirstNameFieldError(){
        return $(firstNameFieldError);
}

}
