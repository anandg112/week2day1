var https = require('https');
var data = '';


function getAndPrintHTML (options) {

  /* Add your code here */

  https.get(requestOptions, function(resp){
    resp.setEncoding('utf8');

    resp.on('data', function(chunk){
      data += chunk;
      console.log(data + '\n');
    });

    resp.on('end', function(){
      console.log('Response stream completed');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);