package cucumber.sconto.steps;

import cucumber.sconto.pages.FurnitureP;
import cucumber.sconto.pages.KundenDatenPage;
import io.cucumber.java.en.Then;

import static com.codeborne.selenide.Condition.text;

public class CommonSteps {


    FurnitureP furniturePage = new FurnitureP();
    KundenDatenPage kundenDatenPage = new KundenDatenPage();

    @Then("I see {} page")
    public void iSeeFurniturePage(String pageName) {

        if (pageName.contains("Ihre Kundendaten")){
            kundenDatenPage.getHeader().shouldHave(text(pageName));
        } else {
            furniturePage.furnitureHeader().shouldHave(text(pageName));
        }
    }
}
