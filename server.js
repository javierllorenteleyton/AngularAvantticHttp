//Install express server
// $ npm install --save opn abre la applicación 
// $ nom install --save express
const express = require('express');
const path = require('path');
const opn = require('opn');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(8080,function() {
    console.log("Servidor corriendo en http://localhost:8080");
	opn('http://localhost:8080');
});