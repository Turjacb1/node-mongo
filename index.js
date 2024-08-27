const express = require('express')
    const cors=require('cors');
  const bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());

const users=["milion","trilion","bilion","multitrilion","elon mask"]





app.get('/',(req,res)=>{
    const fruit=
    {
        product:'ada',
        price:220
    }
    res.send(fruit);

});







app.get('/users/:id',(req,res)=>
{
    const id=req.params.id;
    
    const name=users[id];
    res.send({id,name});

})

//post
app.post('/addUser',(req,res)=>{

})

app.listen(4200,()=>console.log('listing the port 4000'));