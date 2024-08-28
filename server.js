const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('welcome to my hotel .. how i can help you')
})

app.get('/chicken',(req, res)=>{
    var customized_chicken={
        name:'hadrabadi biryani',
        size:'500 gm',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_chicken)
})

app.get('/mutton',(req, res)=>{
    var customized_mutton={
        name:'champaran mutton',
        size:'500 gm',
        is_pyaj:true,
        is_chutney:false
    }
    res.send(customized_mutton)
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

const person=require('./models/person');

const bodyparser= require('body-parser');
app.use(bodyparser.json());