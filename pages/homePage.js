// Object of loginPage imported
var Objects = require('../obj_repo/objects.json')

var HomePage = function(){

	this.viewHealthCard = function(){
		element(by.xpath(Objects.homePageLocators.healthCard)).click();
		browser.sleep(30000);
		/*
			POM design pattern - write return this; if the function takes you to the same page reference
			else give the reference of the next page...
		*/
	};
};

module.exports = new HomePage();