node {
	
	try {
		stage('Preparation') {
			
			checkout scm

			apt-get install xvfb
			Xvfb :1 -screen 0 1600x1200x16 &
			export DISPLAY=:1.0
		}

		stage('Test') {
			protractor conf/conf.js --suite=salt
		}

		stage('Success'){
			echo 'Tests executed successfully'
		}
	}
}
