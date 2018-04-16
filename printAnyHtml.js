var https = require('https')

function getAndPrintHtml (options) {

  
  https.get(options, function(res) {
    var buf = '';
    res.on('data', function(chunk) {
      buf += chunk.toString()
    })
    res.on('end', function() {
      console.log(buf)
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHtml(requestOptions)