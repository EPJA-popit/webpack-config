const baseConfig = require('../webpack.config');

module.exports = {
    mode: 'production',
    entry: process.env.ENTRY,
    ...baseConfig,
}