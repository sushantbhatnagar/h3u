var BasePage = function(){
	this.navigateToURL = function(url){
		browser.get(url);
	};
};

module.exports = new BasePage();
