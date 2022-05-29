package selenide;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$$;

public class CheckboxesP {

    private static final By checkboxes = By.xpath("//form[@id='checkboxes']/input");

    public void checkElt(int index) {
        $$(checkboxes).get(index).click();
    }

    // public boolean isCheckboxNotSelected(int ind) { return $$(checkboxes).shouldHave(Condition.attribute("checked"));}
    public SelenideElement isCheckboxSelected(int ind) {
        return $$(checkboxes).get(ind);
    }
}
