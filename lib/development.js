const baseConfig = require('../webpack.config');

module.exports = {
    mode: 'development',
    entry: [process.env.ENTRY],

    devtool: 'eval-cheap-module-source-map',
    ...baseConfig,
    

}