const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');
//next config object
const config = {}
module.exports = withMyPlugin(config)