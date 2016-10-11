var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log('server is running at localhost: ' + port);
});
