// Importing Other Pages into this js file
var loginPage = require('../pages/loginPage');
var Objects = require('../obj_repo/objects.json');
var base = require('../pages/basePage');

describe('After Login', function(){

	beforeEach(function(){
		browser.get(Objects.h3utestSite);
		loginPage.loginToH3U();
	});

	it('Clicks the back button', function(){
		element(by.xpath(Objects.backButtonPageLocators.logoutText)).getText().then(function(logoutText){
			expect(logoutText).toEqual('Logout');
		});

	it('I should see 3 boxes visible on the homepage', function(){
		element.all(by.className(Objects.backButtonPageLocators.threeBoxes)).then(function(totalBoxes){
			expect(totalBoxes.length).toEqual (3);
			});	
		});
	});	
});
