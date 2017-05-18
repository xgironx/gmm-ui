#!groovy

pipeline
{
  agent any //specifies jenkins execution environment, executor and checks out a repository

  environment {
    PROJECT_NAME = "${env.JOB_NAME.replaceAll(/\\/.*$/, '')}"
    OPENSHIFT_AUTH_TOKEN = credentials('OPENSHIFT_AUTH_TOKEN')
    SONAR_AUTH_TOKEN = credentials('SONAR_AUTH_TOKEN')
    OPENSHIFT_API_URL = "https://10.10.23.87:8443"
    SONAR_HOST_URL = "http://54.193.57.143:9000"
  }
  
  options
  {
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10'))
  }

  tools
  {
    //maven 'Maven 3.3.9'
    nodejs 'Node 7.4.0'
    jdk 'jdk8'
  }

  stages //list of stages specifying in which stage the pipeline steps will be executed
  {

//****************************************
    stage('Initialization')
    {
      steps
      {
        sh 'npm --version'
        sh 'ng -v'
        // sh '''
        //   echo "PATH = ${PATH}"
        //   echo "M2_HOME = ${M2_HOME}"
        // '''
      }
    }


//****************************************
    stage('Pre-Deployment Tests - DEV')
    {
      steps
      {
        parallel(
          'Unit Testing':
          {
            echo "some testing"
            //sh 'npm test -- --code-coverage --single-run'
            //failing on:
            // > karma start ./karma.conf.js "--code-coverage" "--single-run"
            // sh: karma: command not found

          },
          'Code Coverage*':
          {
            echo 'Test coverage...'
          },
          'Code Scan: Lint and Security':
          {
            // requires SonarQube Scanner 2.8+
            //def scannerHome = tool 'SonarQube Scanner 2.8';
            withSonarQubeEnv('GMM BAH Incubator')
            {
              echo 'scanning...'
              //sh "${scannerHome}/bin/sonar-scanner"
              //def sonar.projectKey=Sonar:Scan
              //sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/Default/bin/sonar-scanner"
              sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/Default/bin/sonar-scanner -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.login=${env.SONAR_AUTH_TOKEN} -Dsonar.projectName=${env.PROJECT_NAME} -Dsonar.projectKey=${env.PROJECT_NAME}"
              echo "Results are here: ${SONAR_HOST_URL}/dashboard?id=${env.PROJECT_NAME}"
            }
          }
        )
      }
      post
      {
        always
        {
          echo 'Pick up tests...'
          //junit 'target/surefire-reports/**/*.xml'

        }
      }
    }

//****************************************
    stage('Deploy')
    {
      steps
      {
        withEnv(["SKIP_TLS=1"])
        {
          echo 'Deploying....'
          openshiftBuild apiURL: 'https://10.10.23.87:8443', authToken: "${env.OPENSHIFT_AUTH_TOKEN}", bldCfg: 'bahgmm-ui', buildName: '', checkForTriggeredDeployments: 'true', commitID: '', namespace: 'bahgmm-dev', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
        }
      }
    }
  }
}
