const express = require('express')
const app = express()
const port = 3001
const csvFilePath = 'matches.csv'
const csv = require('csvtojson')
var cors = require('cors')
app.use(cors())

app.get('/', function (req, resp) {
   

    csv().fromFile(csvFilePath).then((jsonObj) => {
             var match={};
            for( key of jsonObj){
                if(match[key['season']]){
                    match[key['season']]=match[key['season']]+1;
                }
                else{
                    match[key['season']]=1;
                }
            }
            resp.send(match);

        });






   
});


app.listen(port, () => console.log(`server start listening on port ${port}!`))