var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname, 'css')));
//app.use(express.static(path.join(__dirname, 'img')));
app.use('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
