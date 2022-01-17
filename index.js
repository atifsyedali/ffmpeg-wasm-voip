var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('.', { index: ['index.html', 'index.htm'],
setHeaders: setHeaders })

// Set header to force download
function setHeaders (res, path) {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
}

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000);

console.log("Server started at http://localhost:3000")