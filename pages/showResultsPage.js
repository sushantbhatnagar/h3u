var Objects = require('../obj_repo/objects.json');

var ShowResultsPage = function(){

	this.scoreDisplayed = function(){
		return element(by.css(Objects.showResultsPageLocators.score)).getText();
	};

	this.colorDisplayed = function(){
		return element(by.css(Objects.showResultsPageLocators.color)).getText();
	};
	this.descriptionDisplayed = function(){
		return element(by.css(Objects.showResultsPageLocators.description)).getText();
	};

	this.saltScore = function(){
		return element(by.xpath(Objects.showResultsPageLocators.saltScore)).getText();
	};

	this.healthStatus = function(){
		return element(by.xpath(Objects.showResultsPageLocators.healthStatus)).getText();
	};
};

module.exports = new ShowResultsPage();
