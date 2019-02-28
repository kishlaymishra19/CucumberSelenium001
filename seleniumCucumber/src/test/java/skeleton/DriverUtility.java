package skeleton;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverUtility {
	public static WebDriver getDriver(String browser)
	{
		if(browser.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
			//System.setProperty("webdriver.chrome.driver", "C:\\Users\\kishlay.mishra\\Downloads\\chromedriver_win32\\chromedriver.exe");
			return new ChromeDriver();
		}
		else
		{
			return null;
		}
	}

}