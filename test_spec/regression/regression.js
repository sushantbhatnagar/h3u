var Objects = require('../../obj_repo/objects.json');
var base = require('../../pages/basePage');
var loginPage = require('../../pages/loginPage');
var homePage = require('../../pages/homePage');
var toolsTrackerPage = require('../../pages/toolsTrackerPage');

var logger = require('../../logger/customlogger.js');

// Feature File
describe('Regression Tests', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);
	});


	xit('Validate the details of the policyholder', async function(){

		logger.info("Login in to the application...");
		loginPage.loginToH3U();

		logger.info("Viewing Health Card Details...");
		
		// View Healthcard
		homePage.viewHealthCard();

		logger.info('Validating the policy number is displayed');

		var policy_number = await element(by.xpath(Objects.healthCardDetailsLocators.policynumber)).getText();
		expect(policy_number.replace(': ','')).toEqual(Objects.loginPageData.policynumber);

		logger.info('Validating the policy holder is displayed');

		var policy_holder = await element(by.xpath(Objects.healthCardDetailsLocators.policyholder)).getText();
		expect(policy_holder.replace(': ','')).toMatch(/\w*/);

	});

	it('3 boxes with texts as BMI Meter, Salt Meter and Smoke Meter should be displayed', function(){
			
		logger.info("Login in to the application...");
		loginPage.loginToH3U();
		logger.info("User is logged in successfully...");
		
		// Debugging
		browser.sleep(10000);

		logger.info('Viewing Tools and Trackers Page...');
		toolsTrackerPage.viewtoolsTrackers();

		logger.info('Validating 3 boxes should be displayed...');
		
		expect(toolsTrackerPage.bmiMeterText()).toEqual(Objects.toolsTrackersPageValidations.bmiMeterValue);
		expect(toolsTrackerPage.saltMeterText()).toEqual(Objects.toolsTrackersPageValidations.saltMeterValue);
		expect(toolsTrackerPage.smokeMeterText()).toEqual(Objects.toolsTrackersPageValidations.smokeMeterValue);
		
		// logger.info('3 boxes displayed successfully...');
	});

	// After Hook
	// afterEach(function(){
	// 	browser.close();
	// });
});
