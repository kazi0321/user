node {

    stage('scm'){
        checkout scm
    }

    stage('git'){

        sh "branchname=`git branch -a | grep remotes/origin/PR`"
        sh "git checkout \$branchname"
    }
    
    stage('mv'){
        sh "mkdir -p ../workdir_user"
        sh "mkdir -p ../node"
        sh "mkdir -p ../workdir_user/node_modules"
        sh "mv ../workdir_user/node_modules ../node 2>/dev/null"
        sh "rm -fr ../workdir_user/* ../workdir_user/.* | echo skip"
        sh "mv ../node/node_modules ../workdir_user"
        sh "mv * .[^\\.]* ../workdir_user"
    }
    
    stage('build'){
        dir("/var/lib/jenkins/workspace/workdir_user"){
        sh "npm install"
        sh "ng test --varbose >tmp"
        sh "if [ `wc -l tmp |awk '{ print \$1 }'` -gt 0 ] ; then cat SIPPAI; else echo SEIKOU ; fi"
        }
    }
}
