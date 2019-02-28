package skeleton;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {

	Person sean;
	Person lucia;
	
	@Given("Sean is {int} metres away \\{from} Lucia")
	public void sean_is_meters_away_from_Lucia(Integer distance) {
		sean=new Person();
		sean.setDistance(distance);
	}

	@When("sean shouts {string}")
	public void sean_shouts(String message) {
		sean.setMessage(message);
	}

	@Then("Lucia hears/(cannot hear) the message")
	public void lucia_hears_the_message() {
		String message=sean.getMessage();
		Assert.assertEquals("free coffee", message);
	}
	
	
}
