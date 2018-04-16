var https = require('https')

function getAndPrintHtml () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(res) {
    var buf = '';
    res.on('data', function(chunk) {
      buf += chunk.toString()
    })
    res.on('end', function() {
      console.log(buf)
    })
  })
}

getAndPrintHtml()