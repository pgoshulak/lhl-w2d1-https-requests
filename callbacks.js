var https = require('https');

function getHtml (options, callback) {
  https.get(options, function(res) {
    var buf = '';
    res.on('data', function(chunk) {
      buf += chunk.toString()
    })
    res.on('end', function() {
      callback(buf)
    })
  })
}

function printHtml (html) {
  console.log(html)
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHtml(requestOptions, printHtml)