package cucumber.sconto;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber-report.json", "pretty"}, // "pretty" - печать пошагово
        glue = "cucumber.sconto" // привязка к пакету
)
public class RunCukesTest {

}
