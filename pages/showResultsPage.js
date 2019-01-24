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
	};!
};

module.exports = new ShowResultsPage();
