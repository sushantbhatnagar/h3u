# h3u Application

This angular based website is used by the clients to connect with a host of wellness services and products. They offer each individual user a customised solution as per their specific profile and needs.

# Technology Stack
 
 - BDD Framework	: 	Protractor Jasmine Framework
 - Language         :   JavaScript
 - Web-driver       :   Protractor/Webdriver JS
 - Logger			: 	Winston
 - Reporting        :   Jenkins integrated Allure Reported
 - Version Control  :   Github
 - CI/CD            :   Jenkins
 - Containers		: 	Docker

# Framework - Folder Structure

Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Below is a high level overview of the folder structure:

1. conf/conf.js - contains the configuration of my tests. 
2. test_spec/* - contains the features/scenarios for SUT.
3. pages/* - followed Page Object Design Pattern to test the application under test. 
4. obj_repo/* - objects that can be reused across different pages so that the code is clean and reusable across different pages. 
5. logger - winston logger implementation.
6. package.json - contains the dependencies of the project and node_modules is the directory that is created. 


# Things To Do:

	- Emailing the Job status
	- Push this image in Docker repo via Jenkins - done
	- Parallel_execution
	- Kubernetes
