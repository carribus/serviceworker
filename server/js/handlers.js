const config = require('../config.json');
const uuidV4 = require('uuid/v4');
const Boom = require('boom');

class ServiceHandlers {
    constructor() {
    }

    serveStaticContent(req, reply) {
        console.log(process.cwd() + config.paths.static_root + "/" + req.params.filename);
        if ( req.params.filename ) {
            reply.file(process.cwd() + config.paths.static_root + "/" + req.params.filename);
        } else {
            reply.file(process.cwd() + config.paths.static_root + "/index.html");
        }
    }
}

module.exports = ServiceHandlers;