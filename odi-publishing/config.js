const main = require('./odi-publishing.json'); // Default settings.
const staging = require('./odi-publishing.json'); // Default settings.

// Temporarily disabled.
// const main_test_pantheon = require('./odi-publishing.main-test-pantheon.json'); // Default settings.
// const staging = require('./odi-publishing.staging.json'); // Default settings.
// const development = require('./odi-publishing.development.json'); // Default settings.
// const localhost = require('./odi-publishing.localhost.json'); // Default settings.

const getConfig = () => {
    var branch = "main"; // @TEMP connect to env varible or github action.
    // @TODO connect .yml or local env variable branch name & return if branch exists.
    
    switch (branch) {
        case 'localhost': 
            return localhost;
        case 'main': 
            return main;
        case 'main_test_pantheon': 
            return main_test_pantheon;
        case 'staging': 
            return staging;
        case 'development': 
            return development;
        default:
            return main;
    }
}

exports.getConfig = getConfig;
