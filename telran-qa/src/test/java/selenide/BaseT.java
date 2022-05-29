package selenide;

import org.junit.Before;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import java.util.Map;

import static com.codeborne.selenide.Selenide.open;


public class BaseT {
    HomeP homeP;
    CheckboxesP checkboxesP;
    WebDriver driver;
    Map<String, Object> vars;
    JavascriptExecutor js;

    @Before
    public void setUp() {
        open("http://the-internet.herokuapp.com/");
        homeP = new HomeP();
    }
}
