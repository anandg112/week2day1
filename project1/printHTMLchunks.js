var https  = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(resp){
    resp.setEncoding('utf8');

    resp.on('data', function(data){
      console.log(data + '\n');
    });

    resp.on('end', function(){
      console.log('Response stream completed');
    });



  });

}

getAndPrintHTMLChunks();