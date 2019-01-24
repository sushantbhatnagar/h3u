// Object of loginPage imported
var Objects = require('../obj_repo/objects.json')

var SaltMeterPage = function(){
	
	this.slicesBread = function(quantity){	
		element(by.model(Objects.saltMeterPageLocators.bread)).$("[value='number:"+ quantity +"']").click();
	};

	this.portionsBreakfast = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.cereals)).$("[value='number:"+ quantity +"']").click();
	};

	this.portionsCuredMeat = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.curedMeat)).$("[value='number:"+ quantity +"']").click();
	};

	this.freshMeat = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.freshMeat)).$("[value='number:"+ quantity +"']").click();
	};

	this.freshFish = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.freshFish)).$("[value='number:"+ quantity +"']").click();
	};

	this.portionsCheese = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.cheese)).$("[value='number:"+ quantity +"']").click();
	};

	this.dairyProducts = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.dairyProducts)).$("[value='number:"+ quantity +"']").click();
	};

	this.portionsFatBased = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.fatBased)).$("[value='number:"+ quantity +"']").click();
	};

	this.portionsBakedBeans = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.spaghetti)).$("[value='number:"+ quantity +"']").click();
	};

	this.readyMadeSoup = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.readyMadeSoup)).$("[value='number:"+ quantity +"']").click();
	};

	this.howMuchSauce = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.sauce)).$("[value='number:"+ quantity +"']").click();
	};

	this.savouryNamkeen = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.namkeen)).$("[value='number:"+ quantity +"']").click();
	};

	this.cakesPastries = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.sweets)).$("[value='number:"+ quantity +"']").click();
	};

	this.readyMeals = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.readyMeals)).$("[value='number:"+ quantity +"']").click();
	};

	this.fastFood = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.fastFood)).$("[value='number:"+ quantity +"']").click();
	};

	this.howMuchSaltPerson = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.howMuchSalt)).$("[value='"+ quantity +"']").click();
	};

	this.howMuchSaltTable = function(quantity){
		element(by.model(Objects.saltMeterPageLocators.howMuchSaltTable)).$("[value='number:"+ quantity +"']").click();	
	};

	this.showResults = function(){
		element(by.buttonText(Objects.saltMeterPageLocators.showResults)).click();
	};

	this.fillSaltMeterPage = function(){
		this.slicesBread(Objects.saltMeterPageData.breadData);
		this.portionsBreakfast(Objects.saltMeterPageData.cerealsData);
		this.portionsCuredMeat(Objects.saltMeterPageData.curedMeatData);
		this.freshMeat(Objects.saltMeterPageData.freshMeatData);

		this.freshFish(Objects.saltMeterPageData.freshFishData);
		this.portionsCheese(Objects.saltMeterPageData.dairyProductsData);
		this.portionsFatBased(Objects.saltMeterPageData.fatBasedData);
		this.portionsBakedBeans(Objects.saltMeterPageData.spaghettiData);

		this.readyMadeSoup(Objects.saltMeterPageData.readyMadeSoupData);
		this.howMuchSauce(Objects.saltMeterPageData.sauceData);
		this.savouryNamkeen(Objects.saltMeterPageData.namkeenData);
		this.cakesPastries(Objects.saltMeterPageData.sweetsData);

		this.readyMeals(Objects.saltMeterPageData.readyMealsData);
		this.fastFood(Objects.saltMeterPageData.fastFoodData);
		this.howMuchSaltPerson(Objects.saltMeterPageData.howMuchSaltData);
		this.howMuchSaltTable(Objects.saltMeterPageData.howMuchSaltTableData);
		
		this.showResults();
		browser.sleep(1000);
	}
};

module.exports = new SaltMeterPage();
