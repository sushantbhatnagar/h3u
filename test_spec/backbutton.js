// Importing Other Pages into this js file
var loginPage = require('../pages/loginPage');
var Objects = require('../obj_repo/objects.json');
var base = require('../pages/basePage');


describe('After Login', function(){

	beforeEach(function(){
		browser.get(Objects.h3utestSite);
	});

	it('Clicks the back button', function(){
		loginPage.loginToH3U();

		element(by.xpath(Objects.backButtonPageLocators.logoutText)).getText().then(function(logoutText){
			expect(logoutText).toEqual('Logout');
		});
	});
		
		// expect(element(by.buttonText(Objects.backButtonPageLocators.logoutText)).getText()).toEqual('Logout');
});
