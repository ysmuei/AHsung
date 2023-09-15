const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/accounts/login",
      createProxyMiddleware( {
        target: 'http://port-0-ahsung-147bpb2mlm9bk1aw.sel5.cloudtype.app',
        changeOrigin: true
      })
    )
    
  };
  