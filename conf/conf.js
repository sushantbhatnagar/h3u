exports.config={
	directConnect: true,

	capabilities:{
		browserName: 'chrome',
	},

	framework: 'jasmine2',

	specs: ['../test_spec/login_h3u.js','../test_spec/homepage_h3u.js'],

	restartBrowserBetweenTests: true,

	jasmineNodeOpts:{
		defaultTimeoutInterval: 100000	
	},

	onPrepare: function(){
	    var AllureReporter = require('jasmine-allure-reporter');
	    jasmine.getEnv().addReporter(new AllureReporter({
	    allureReport:{
	      resultsDir: 'allure-results'	    	
	    }	
    }));
	  jasmine.getEnv().afterEach(function(done){
	  	browser.takeScreenshot().then(function(png){
	  		allure.createAttachment('Screenshot', function(){
	  			return new Buffer(png,'base64')
	  		}, 'image/png')();
	  		done();
	  	})
	  });  
	}	
};
