package selenide.sconto;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import cucumber.sconto.pages.FurnitureP;
import org.openqa.selenium.By;
import selenide.sconto.util.PropertiesLoader;

import java.util.Locale;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.page;

public class HeaderMenu {
    /* Properties from the properties file*/
    public static String kontoText = PropertiesLoader.loadProperty("konto.text");
    public static String anmeldenText = PropertiesLoader.loadProperty("anmelden.text");


    /* Locators on the website Header */
    private static By wishlistNumber = By.cssSelector(".headerElement__status--wishlist");
    private static final By iconLogin = By.cssSelector(".headerElement__text--login"); // нужно уникальное и универсальное поисковое наименование!




    /* Methods for Header Menu */

    public <T> T clickLoginIcon(Class<T> expectedPage){ // решение проблемы с одинаковыми действиями, меняем в тесте
        $(iconLogin).click();
        return page(expectedPage);
    }

    public void checkIconText(String iconText) {
        $(iconLogin).shouldHave(Condition.text(iconText));
    }

    public SelenideElement countNumber() {
        return $(wishlistNumber);
    }

    public FurnitureP clickOnFurniture(String menuName) {
        By menuItem = By.cssSelector(".menu__link--" + menuName.toLowerCase());
        $(menuItem).doubleClick(); // если клик 1, то открывается меню выбора вариантов софы
        return Selenide.page(FurnitureP.class);
    }
}

/*
    public LoginPage clickOnLoginIcon() {
        $(iconLogin).click();
        return page(LoginPage.class);
    }

    public KontoPage clickMyKontoIcon() {
        $(iconLogin).click();
        return page(KontoPage.class);
    }
*/
