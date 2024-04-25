const express    = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
require('dotenv').config()
const port=process.env.PORT
 
const app = express();
morgan('dev')

app.use(bodyParser.json());
 
app.get('/', (request, response) => {
    response.send('Hello new world!');
});
 
app.listen(port,()=>{
console.log(`Server running on port ${port}`)
});