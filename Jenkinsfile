node {

    stage('scm'){
        checkout scm
    }

    stage('git'){

        sh "branchname=`git branch -a | grep remotes/origin/PR`"
        sh "git checkout \$branchname"
    }
    
    stage('mv'){
        sh "rm -rf ../dummy"
        sh "mkdir -p ../dummy"
        sh "mv * .[^\\.]* ../dummy"
    }
    
    stage('build'){
        dir("/var/lib/jenkins/workspace/dummy"){
        sh "npm install"
        sh "ng test --varbose >tmp"
        sh "if [ `wc -l tmp |awk '{ print \$1 }'` -gt 0 ] ; then cat SIPPAI; else echo SEIKOU ; fi"
        }
    }
}
