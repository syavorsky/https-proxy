
var fs        = require('fs');
var path      = require('path');
var httpProxy = require('http-proxy');

module.exports = function(target, port) {
  httpProxy.createServer({
    target : target,
    ssl    : {
      key  : fs.readFileSync(path.join(__dirname, 'certs', 'server.key'), 'utf8'),
      cert : fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'), 'utf8')
    }
  })
    .listen(port);
  console.log('Proxying to "%s" through "https://localhost:%s"', target, port);
};
