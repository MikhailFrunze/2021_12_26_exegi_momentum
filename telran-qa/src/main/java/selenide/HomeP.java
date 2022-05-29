package selenide;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.FindBy;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.page;

public class HomeP {

    @FindBy(linkText = "Checkboxes")
    SelenideElement checkbox;

    public CheckboxesP goToCheckboxesP() {
        $(By.linkText("Checkboxes")).click();
        return page(CheckboxesP.class);
    }
}

