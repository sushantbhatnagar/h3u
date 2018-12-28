// Importing Other Pages into this js file
var loginPage = require('../pages/loginPage');
var Objects = require('../obj_repo/objects.json');
var base = require('../pages/basePage');

// Feature File
describe('Login to h3u application', function(){

	// Before Hook
	beforeEach(function(){
		browser.get(Objects.h3utestSite);
	});

	it('Login to h3u successfully', function(){
		// Login to h3u application
		loginPage.loginToH3U();

		// Validation steps
		expect(element(by.xpath(Objects.homePageLocators.logoutText)).getText()).toEqual (Objects.homePageValidations.logout);

		element.all(by.xpath("//*[@class='dashboard-container ng-scope']/div")).then(function(boxes_options){
			expect(boxes_options.length).toEqual (3) ;
		});

		navBars = ['Home', 'About Us', 'How To Use', 'Product Info', 'Network', 'Contact', 'Profile', 'Logout'];
		
		element.all(by.xpath(".//*[@class='nav navbar-nav']/li")).then(function(navBarOptions){
			for(i=0; i <navBarOptions.length; i++) {
				navBarOptions[i].getText().then(function(option){
					expect(navBars).toContain(option);
				});
			};		
		});		
	});

	// After Hook
	afterEach(function(){
		browser.close();
	});

});