require('dotenv').config();

module.exports = (function() {
    switch(process.env.NODE_ENV) {
        case "stage" :
            return require('./stage')
        case "prod" :
            return require('./prod')
    }
    return require('./local')
})();