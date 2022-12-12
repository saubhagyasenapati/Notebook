const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors')




connectToMongo();
const app = express()
const port = 5000
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})