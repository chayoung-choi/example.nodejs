const express = require('express');
const path = require('path');
var app = express();
app.set('views', path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

app.use(express.static(path.join(__dirname , 'public')));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname , 'index.html'));
})

let data = [
	{
		id: 1,
		name: 'Alice'
	},
	{
		id: 2,
		name: 'Kelly'
	},
	{
		id: 3,
		name: 'Mant'
	}
]
app.get('/data', function(req, res) {
	console.log('get', new Date());
	return res.json(data);
});
app.post('/data', function(req, res) {
	console.log('post', new Date());
	console.log('req.data', req);
	return res.json(data);
});
var port = 80;
app.listen(port , ()=>{
	console.log('Server is running at '+port);
})
