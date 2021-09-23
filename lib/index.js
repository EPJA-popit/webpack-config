if (process.env.NODE_ENV === 'produciton') {
    module.exports = require('./production')
} else {
    module.exports = require('./development')
}