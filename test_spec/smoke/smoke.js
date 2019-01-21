var Objects = require('../../obj_repo/objects.json');
var base = require('../../pages/basePage');
var loginPage = require('../../pages/loginPage');
var homePage = require('../../pages/homePage');
var toolsTrackerPage = require('../../pages/toolsTrackerPage');

var logger = require('../../logger/customlogger.js');

// Feature File
describe('Smoke Tests', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);
	});

	it('Login to h3u successfully', function(){
		// Login to h3u application
		loginPage.loginToH3U();

		// Validation steps
		expect(element(by.xpath(Objects.homePageLocators.logoutText)).getText()).toEqual (Objects.homePageValidations.logout);
	});

	it('Able to view the healthcard details of a patient', function(){

		logger.info("Login in to the application...");
		loginPage.loginToH3U();
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

	it('"Select Member" dropdown should display the name of the policy holder along with its relation', function(){		

		logger.info("Login in to the application...");
		loginPage.loginToH3U();

		logger.info('Viewing Tools and Trackers Page...');
		toolsTrackerPage.viewtoolsTrackers();
		logger.info("Navigated to Tools and Trackers Page successfully...")

		logger.info('Validating the name of the policy holder');

		var defaultValue = toolsTrackerPage.selectedMemberValue();

		defaultValue.then(function(value){
		 expect(value).toContain(Objects.toolsTrackersPageValidations.memberName);
		 expect(value).toContain('Self');
		});
	});

	// After Hook
	afterEach(function(){
		browser.close();
	});
});
