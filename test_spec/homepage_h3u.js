// Importing Other Pages into this js file
var loginPage = require('../pages/loginPage');
var Objects = require('../obj_repo/objects.json');
var base = require('../pages/basePage');

var homePage = require('../pages/homePage');

var logger = require('../logger/customlogger.js');

// Feature File
describe('Home Page Validations', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);

		logger.info("Login in to the application...");
		loginPage.loginToH3U();
	});

	it('Able to view the healthcard details of a patient', function(){
	
		logger.info("Viewing Health Card Details...");
		
		// View Healthcard
		homePage.viewHealthCard();

		// Validationsde
		logger.debug("Validations Begin...");

		// Use of Promises to validate the text !
		element(by.xpath(Objects.healthCardDetailsLocators.policynumber)).getText().then(function(policynumber){
			expect(policynumber.replace(': ','')).toEqual(Objects.loginPageData.policynumber);
		});

		element(by.xpath(Objects.healthCardDetailsLocators.policyholder)).getText().then(function(policyholder){
			expect(policyholder.replace(': ','')).toMatch(/\w*/);
		});

		element(by.xpath(Objects.healthCardDetailsLocators.relation)).getText().then(function(relation){
			expect(relation.replace(': ','')).toEqual('Self');
		});

		element(by.xpath(Objects.healthCardDetailsLocators.validdate)).getText().then(function(date){
			// Todo: Date needs to be validate - MM/DD/YYYY 
			expect(date.replace(': To ','')).toMatch(/\d{2}\/\d{2}\/\d{4}/);
		});
	});


	it('Validate the details of the policyholder', async function(){
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

	// After Hook
	// afterEach(function(){
	// 	browser.close();
	// });

});