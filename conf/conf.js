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
	}	
};
