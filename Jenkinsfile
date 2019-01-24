node {
	
	try {
		stage('Preparation'){
			
			sh checkout scm;
		}

		stage('Test'){
			sh protractor conf/conf.js --suite=salt;
		}

		stage('Success'){
			echo 'Tests executed successfully';
		}
	}
}
