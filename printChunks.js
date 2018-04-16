var https = require('https')

function getAndPrintHtmlChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function(res) {
    res.on('data', function(chunk) {
      console.log(`###### Chunk received, length = ${chunk.length}`)
      console.log(chunk.toString(), '\n');
    });
    res.on('end', function() {
      console.log('###### End of data')
    });
  });
}

getAndPrintHtmlChunks();