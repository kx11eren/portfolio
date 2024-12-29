const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: 'http://localhost:9000',
        //Sonar 9.7.1
        //token: 'sqp_6fd061efb017bbd0a3711e1bdd5f1b75e3825150',
        //sonar 9.8
        // token: 'sqp_d705a381b2fd9d7d70c4a70a978a8eb55f38eaff',
        options: {
            'sonar.projectName': 'KX11Eren',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'KX11Eren-Key',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.sources': './src'
        }
    },
    () => process.exit()
);
