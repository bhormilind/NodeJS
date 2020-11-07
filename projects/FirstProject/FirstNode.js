const http = require('http');
const routes = require('./routers');

const server = http.createServer(routes);

server.listen(3000);
