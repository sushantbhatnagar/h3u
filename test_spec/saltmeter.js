// Importing Other Pages into this js file
var base = require('../pages/basePage');
var loginPage = require('../pages/loginPage');
var homePage = require('../pages/homePage');
var toolsTrackerPage = require('../pages/toolsTrackerPage');
var Objects = require('../obj_repo/objects.json');
var saltMeterPage = require('../pages/saltMeterPage');
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

	});

	it('I should be able to see the score, color and description of my salt consumption', function(){	
		saltMeterPage.slicesBread(Objects.saltMeterPageData.breadData);
		saltMeterPage.portionsBreakfast(Objects.saltMeterPageData.cerealsData);
		saltMeterPage.portionsCuredMeat(Objects.saltMeterPageData.curedMeatData);
		saltMeterPage.freshMeat(Objects.saltMeterPageData.freshMeatData);

		saltMeterPage.freshFish(Objects.saltMeterPageData.freshFishData);
		saltMeterPage.portionsCheese(Objects.saltMeterPageData.dairyProductsData);
		saltMeterPage.portionsFatBased(Objects.saltMeterPageData.fatBasedData);
		saltMeterPage.portionsBakedBeans(Objects.saltMeterPageData.spaghettiData);

		saltMeterPage.readyMadeSoup(Objects.saltMeterPageData.readyMadeSoupData);
		saltMeterPage.howMuchSauce(Objects.saltMeterPageData.sauceData);
		saltMeterPage.savouryNamkeen(Objects.saltMeterPageData.namkeenData);
		saltMeterPage.cakesPastries(Objects.saltMeterPageData.sweetsData);

		saltMeterPage.readyMeals(Objects.saltMeterPageData.readyMealsData);
		saltMeterPage.fastFood(Objects.saltMeterPageData.fastFoodData);
		saltMeterPage.howMuchSaltPerson(Objects.saltMeterPageData.howMuchSaltData);
		saltMeterPage.howMuchSaltTable(Objects.saltMeterPageData.howMuchSaltTableData);

		browser.sleep(3000);
		
		saltMeterPage.showResults();
	});
});
