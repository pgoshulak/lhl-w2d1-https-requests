var https = require('https')

module.exports = function getHtml (options, callback) {
  https.get(options, function(res) {
    var buf = '';
    res.on('data', function(chunk) {
      buf += chunk.toString()
    })
    res.on('end', function() {
      callback(buf)
    })
  })
};