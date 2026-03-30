pipeline {
    agent any

    environment {
		BACKEND_HOST="https://irw-api.mysliwczykrafal.pl"
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh """
                    rm .env || true
                    echo "VITE_API_URL=${BACKEND_HOST}" >> .env
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t \"irw-frontend\" .'
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                sh 'docker stop irw-frontend || true'
                sh 'docker rm irw-frontend || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --restart always --name \"irw-frontend\" -p 8011:8000 \"irw-frontend\"'
            }
        }
    }
}
