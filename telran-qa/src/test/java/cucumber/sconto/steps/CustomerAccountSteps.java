package cucumber.sconto.steps;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import cucumber.sconto.pages.*;
import cucumber.sconto.util.Helper;
import io.cucumber.datatable.DataTable;
import io.cucumber.docstring.DocString;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


import java.util.List;
import java.util.Map;

import static com.codeborne.selenide.Selenide.page;

/**
 * CustomerAccountSteps
 * Class implements the Customer Account page step definitions.
 *
 * @author Violeta Abramova abramova.violetta@gmail.com
 */
public class CustomerAccountSteps {

    CustomerAccountP customerAccountPage;
    LoginP loginPage;
    HomeP homePage;
    WishlistP wishlistPage;
    KundenDatenPage kundenDatenPage;

    @Then("I should be logged in")
    public void shouldBeLoggedIn() {
        customerAccountPage = page(CustomerAccountP.class);
        customerAccountPage.accountTitle().should(Condition.exist);
    }

    @When("I click on logout Button")
    public void iClickOnLogoutButton() {
        loginPage = customerAccountPage.clickOnLogout();
    }

    /*@Given("I am on Customer Account Page")
    public void iAmLoggedIn() {
        loginPage = Selenide.open(Helper.loginURL, LoginP.class);
        Helper.acceptCookies();
        loginPage.validLoginInput();
        homePage = loginPage.clickLoginBtn();
        homePage.checkIconText("Mein Konto");
        customerAccountPage = homePage.clickLoginIcon(CustomerAccountP.class);
        shouldBeLoggedIn();
    }*/

    @When("I click on Ihre Wunschliste")
    public void clickOnWishlist() {
        wishlistPage = customerAccountPage.clickOnWishlistInKundenkontoMenu();
    }

    @When("I click on Ihre Kundendaten")
    public void iClickOnIhreKundendaten() {
        kundenDatenPage = customerAccountPage.clickOnIhreKundenDatenMenu();
    }


    @Given("I am on Customer Account page")
    public void iAmOnCustomerAccountPage() {
        loginPage = Selenide.open(Helper.loginURL, LoginP.class);
        Helper.acceptCookies();
        loginPage.validLoginInput();
        homePage = loginPage.clickLoginBtn();

        homePage.checkIconText("Mein Konto");
        customerAccountPage = homePage.clickLoginIcon(CustomerAccountP.class);
        shouldBeLoggedIn();
    }

    @When("I expand Ihre persönlichen Daten")
    public void iExpandIhrePersönlichenDaten() {
        kundenDatenPage.clickOnPersonlichenDaten();
    }

    @When("I click on Edit button")
    public void clickOnEditButton() {
        kundenDatenPage.clickOnEditButton();
    }

    @Then("I see Ihre persönlichen Daten edit form")
    public void iSeeIhrePersönlichenDatenEditForm() {
        kundenDatenPage.getSaveButton().should(Condition.exist);
    }

    @When("I change customer name to {}")
    public void iChangeCustomerName(String name) {
        kundenDatenPage.editFirstNameField(name);
    }

    @When("I click Save button")
    public void clickOnSaveButton() {
        kundenDatenPage.getSaveButton().click();
    }

    @Then("I see error message:")
    public void iSeeFirstNameError(DocString errorMessage) {
        String message = errorMessage.getContent();
        kundenDatenPage.getFirstNameFieldError().shouldHave(Condition.text(message));
    }

    @When("I change customer data")
    public void iChangeCustomerData(DataTable customerInfo) {
        List<Map<String, String>> data = customerInfo.asMaps(String.class, String.class);
        String customerName = data.get(0).get("Name");
        String customerLastName = data.get(0).get("Last Name");
        String customerCountryCode = data.get(0).get("Country Code");
        String customerPhoneNumber = data.get(0).get("Phone Number");
        String customerBirthday = data.get(0).get("Birthday");
        kundenDatenPage.editCustomerDataFields(customerName, customerLastName, customerCountryCode, customerPhoneNumber, customerBirthday);
    }

    @Then("I see Edit button")
    public void iSeeEditButton() {
        kundenDatenPage.getSaveButton().should(Condition.exist);
    }



}


