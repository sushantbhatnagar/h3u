// Object of loginPage imported
var Objects = require('../obj_repo/objects.json')

var LoginPage = function(){
	// Login Steps - Business Logic
	this.loginToH3U = function(){	
		element(by.model(Objects.loginPageLocators.policynumber)).sendKeys(Objects.loginPageData.policynumber);
		element(by.id(Objects.loginPageLocators.password)).sendKeys(Objects.loginPageData.password);
		element(by.buttonText(Objects.loginPageLocators.login)).click();

		/* 
			POM design patter i.e. returning the reference of the next page this function will lead to...
			return require('./homePage.js');
		*/

	};
};

module.exports = new LoginPage();
