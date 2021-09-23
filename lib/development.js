const baseConfig = require('../webpack.config');

module.exports = {
    mode: 'development',
    entry: [process.env.ENTRY],

    devtools: 'eval-cheap-module-source-map',
    ...baseConfig,
    

}