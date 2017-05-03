module.exports = function(Handlers) {
    return [
        {
            method: 'GET',
            path: '/',
            handler: Handlers.serveStaticContent.bind(Handlers),
            config: {
                tags: ['api'],
                description: "Serve static content",
                cors: true
            }
        },
        {
            method: 'GET',
            path: '/{filename}',
            handler: Handlers.serveStaticContent.bind(Handlers),
            config: {
                tags: ['api'],
                description: "Serve static content",
                cors: true
            }
        }
    ];
};
