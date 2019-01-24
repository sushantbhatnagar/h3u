node {
	
		stage('Preparation'){		
			sh 'checkout scm'

			sh 'apt-get install xvfb'
			sh 'Xvfb :1 -screen 0 1600x1200x16 &'
			sh 'export DISPLAY=:1.0'
		}

		stage('Test'){
			sh 'protractor conf/conf.js --suite=salt'
		}

		stage('Success'){
			echo 'Tests executed successfully'
		}
	
}
