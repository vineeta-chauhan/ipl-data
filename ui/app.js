const express = require('express' )
const app = express()
const port = 3000

console.log(__dirname);
app.get('/msg',(req, res) => res.send('Hello World in msg root!')) 
app.get('/index', (req, res) => res.send('Hello World!')  )
app.get('/', function(req, res){
    res.sendFile('index.html',{root: __dirname});
});
app.listen(port, () => console.log(`server start listening on port ${port}!`))