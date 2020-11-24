const express = require('express');
const path = require('path');
var app = express();
app.set('views', path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

app.use(express.static(path.join(__dirname , 'public')));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname , 'index.html'));
})

var port = 80;
app.listen(port , ()=>{
	console.log('Server is running at '+port);
})
