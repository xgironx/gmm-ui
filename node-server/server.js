const express = require('express');
var path = require('path');

var app = express();  
var staticRoot = __dirname;  

app.set('port', (process.env.PORT || 8080));  

app.use(express.static(staticRoot));

app.get('/', function(req, res) {
    //res.sendFile(path.resolve('index.html'));
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});