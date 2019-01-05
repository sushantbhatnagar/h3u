// Object of loginPage imported
var Objects = require('../obj_repo/objects.json')

var toolsTrackerPage = function(){

	this.viewtoolsTrackers = function(){
		element(by.xpath(Objects.homePageLocators.toolsTrackers)).click();
		browser.sleep(30000);
		/*
			POM design pattern - write return this; if the function takes you to the same page reference
			else give the reference of the next page...
		*/
	};

	this.selectedMemberValue = function(){
		return element(by.model(Objects.toolsTrackersPageLocators.member)).getText();
	};

};

module.exports = new toolsTrackerPage();