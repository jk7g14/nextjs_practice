// const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// //next config object
// const config = {}
// module.exports = withMyPlugin(config)
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad();

const withEnv = nextEnv()
module.exports = withEnv()