var https = require('https');
var data = '';

function getHTML (options, callback) {

  /* Add your code here */
    https.get(requestOptions, function(resp){
    resp.setEncoding('utf8');

    resp.on('data', function(chunk){
      data += chunk;
      return callback(data);
    });

    resp.on('end', function(){
      console.log('Response stream completed');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);