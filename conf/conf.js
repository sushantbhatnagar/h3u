exports.config={
	directConnect: true,
	// seleniumAddress: 'http://localhost:4444/wd/hub',

	// Browser
	capabilities:{
		browserName: 'chrome',
		'chromeOptions': {
   		 'args': ['no-sandbox']
  		},
  		logName: 'Chrome - English',
  		name: 'Zalenium Chrome Tests'
	},

	// framework
	framework: 'jasmine2',

	// Specs Usage
	// specs: ['../test_spec/login_h3u.js',
	// 		'../test_spec/homepage_h3u.js',
	// 		'../test_spec/homepage_h3u.js'
	// ],

	// Suites Specific
	suites:{
		smoke: ['../test_spec/smoke/smoke.js'],
		regression: ['../test_spec/regression/regression.js'],
		selected: ['../test_spec/login_h3u.js', '../test_spec/homepage_h3u.js'],
		full: ['../test_spec/*.js'],
		salt: ['../test_spec/saltmeter.js'],
		zalenium: ['../test_spec/smoke/smoke.js','../test_spec/regression/regression.js']
	},
	
	restartBrowserBetweenTests: true,

	jasmineNodeOpts:{
		allScriptsTimeout: 250000,
		defaultTimeoutInterval: 100000,
		showColors: true
		
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
