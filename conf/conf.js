exports.config={
	// directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities:{
		browserName: 'chrome',
	},

	framework: 'jasmine2',

	// specs: ['../test_spec/login_h3u.js','../test_spec/homepage_h3u.js'],
	specs: ['../test_spec/tools_trackers_h3u.js'],

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
