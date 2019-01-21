// Importing Other Pages into this js file
var base = require('../pages/basePage');
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var toolsTrackerPage = require('../pages/toolsTrackerPage');
var Objects = require('../obj_repo/objects.json');
var logger = require('../logger/customlogger.js');

// Feature File
describe('Tools and Trackers Validations', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);
		
		logger.info("Login in to the application...");
		loginPage.loginToH3U();
		logger.info("User is logged in successfully...");
	});

	it('I should be navigated to Tools and Trackers Page successfully', function(){
		logger.info('Viewing Tools and Trackers Page...');
		// browser.debugger();
		toolsTrackerPage.viewtoolsTrackers();
		logger.info("Navigated to Tools and Trackers Page successfully...")
	});

	it('"Select Member" dropdown should display the name of the policy holder along with its relation', function(){		
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

	it('3 boxes with texts as BMI Meter, Salt Meter and Smoke Meter should be displayed', function(){
		
		logger.info('Validating 3 boxes should be displayed...');

		expect(Objects.toolsTrackerPage.bmiMetertext()).toEqual(Objects.toolsTrackersPageValidations.bmiMeter);
		expect(Objects.toolsTrackerPage.saltMetertext()).toEqual(Objects.toolsTrackersPageValidations.saltMeter);
		expect(Objects.toolsTrackerPage.smokeMetertext()).toEqual(Objects.toolsTrackersPageValidations.smokeMeter);

		logger.info('Validating 3 boxes are displayed...');
	});
});
