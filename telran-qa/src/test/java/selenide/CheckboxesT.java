package selenide;

import com.codeborne.selenide.Condition;
import org.junit.Test;

import java.util.List;

import static com.codeborne.selenide.Selenide.$$;

public class CheckboxesT extends BaseT {

    @Test
    public void checkbox1Click() { // оба выбраны
        int checkboxIndex = 0;
        checkboxesP = homeP.goToCheckboxesP();
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.isCheckboxSelected(checkboxIndex).shouldHave(Condition.attribute("checked"));
    }

    @Test
    public void checkbox2Click() { // оба не выбраны
        int checkboxIndex = 1;
        checkboxesP = homeP.goToCheckboxesP();
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.isCheckboxSelected(checkboxIndex).shouldNotHave(Condition.attribute("checked"));
    }

    @Test
    public void clickCheckbox1and2() { // верхний да, нижний нет
        checkboxesP = homeP.goToCheckboxesP();
        checkboxesP.checkElt(0);
        checkboxesP.checkElt(1);
        checkboxesP.isCheckboxSelected(0).shouldHave(Condition.attribute("checked"));
        checkboxesP.isCheckboxSelected(1).shouldNotHave(Condition.attribute("checked"));
    }

    @Test
    public void clickCheckbox1twoTimes() { // нажимаем 2 раза на 1 элемент
        int checkboxIndex = 0;
        checkboxesP = homeP.goToCheckboxesP();
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.isCheckboxSelected(checkboxIndex).shouldNotHave(Condition.attribute("checked"));
    }

    @Test
    public void clickCheckbox2twoTimes() { // нажимаем 2 раза на 2 элемент
        int checkboxIndex = 1;
        checkboxesP = homeP.goToCheckboxesP();
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.checkElt(checkboxIndex);
        checkboxesP.isCheckboxSelected(checkboxIndex).shouldHave(Condition.attribute("checked"));
    }
}
