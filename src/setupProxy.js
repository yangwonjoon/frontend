const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    ),
        app.use(
            createProxyMiddleware('/hi', {
                target: 'http://localhost:5000',  // Update the target URL
                changeOrigin: true,
                secure: false
            })
        );
};