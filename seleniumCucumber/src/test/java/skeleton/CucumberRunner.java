package skeleton;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:src/reports/html-report","json:src/reports/report.json"},monochrome=true)
public class CucumberRunner {

}
