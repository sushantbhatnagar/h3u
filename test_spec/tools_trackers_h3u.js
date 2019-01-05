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
});
