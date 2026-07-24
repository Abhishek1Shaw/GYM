pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build app') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy to AWS EC2') {
      steps {
        withCredentials([
          string(credentialsId: 'aws-host', variable: 'AWS_HOST'),
          string(credentialsId: 'aws-user', variable: 'AWS_USER')
        ]) {
          sshagent(['aws-ec2-key']) {
            sh '''
              set -e
              ssh -o StrictHostKeyChecking=no "$AWS_USER@$AWS_HOST" "mkdir -p /var/www/gym-app"
              scp -o StrictHostKeyChecking=no -r dist/* "$AWS_USER@$AWS_HOST:/var/www/gym-app/"
              ssh -o StrictHostKeyChecking=no "$AWS_USER@$AWS_HOST" "sudo systemctl reload nginx || true"
            '''
          }
        }
      }
    }
  }
}
