var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
      throw err;
  })
  .on('response', function(resp){
      console.log('Response Status Message', resp.statusMessage);
      console.log('Response content type : ', resp.headers['content-type'])
  })
  .pipe(fs.createWriteStream('./future.jpg'))