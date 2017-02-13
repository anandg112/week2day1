var https = require('https');


module.exports = function getHTML (options, callback) {
    /* Your code here */

    var data = '';

    https.get(options, function(resp){
    resp.setEncoding('utf8');

    resp.on('data', function(chunk){
      data += chunk;
      return callback(data);
    });

    resp.on('end', function(){
      console.log('Response stream completed');
    });

  });

};


// module.exports = {
//   getHTML: getHTML,
//   printHTML: printHTML
// };

