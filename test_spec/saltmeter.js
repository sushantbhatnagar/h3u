// Importing Other Pages into this js file
var base = require('../pages/basePage');
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var toolsTrackerPage = require('../pages/toolsTrackerPage');
var Objects = require('../obj_repo/objects.json');
var saltMeterPage = require('../pages/saltMeterPage');
var showResultsPage = require('../pages/showResultsPage');
var logger = require('../logger/customlogger.js');


// Feature File
describe('Salt Meter', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);

		logger.info("Login in to the application...");
		loginPage.loginToH3U();
		logger.info("User is logged in successfully...");
		
		logger.info('Viewing Tools and Trackers Page...');
		toolsTrackerPage.viewtoolsTrackers();
		logger.info("Navigated to Tools and Trackers Page successfully...");

		logger.info('Navigating to Salt Meter Page');
		toolsTrackerPage.viewsaltMeterPage();
		logger.info('Navigated to Salt Meter Page');

		logger.info('Filling salt Meter Page with valid values');
		saltMeterPage.fillSaltMeterPage();

	});

	xit('I should be able to see the score, color and description of my salt consumption', async function(){	
		
		var scoreText = await showResultsPage.scoreDisplayed();
		expect(scoreText).toEqual('SCORE');

		var colorColor = await showResultsPage.colorDisplayed();
		expect(colorColor).toEqual('COLOR');

		var descriptionText = await showResultsPage.descriptionDisplayed();
		expect(descriptionText).toEqual('DESCRIPTION');
	});

	it('I should be able to see the Salt score and the color of the salt', async function(){
		var saltResult = await showResultsPage.saltScore();
		expect(saltResult).toMatch(/\d{2}\.\d{2}/);

		expect(saltResult.getCssValue('color')).toBe(Objects.saltScoreColor.tenPlus);
	});

	it('I should be able to see the health Result and the color of the health status', async function(){
		var healthResult = await showResultsPage.healthStatus();
		expect(healthResult).toMatch(/\w*/);

		expect(healthResult.getCssValue('color')).toBe(Objects.saltScoreColor.tenPlus);
	});

});
