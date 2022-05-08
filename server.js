
const express = require('express');
const app = express();
const port = 5000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/api',(req,res)=>{
    const response={message:"Hello World"}
    res.json(response);
});
app.get('/api/customers',(req,res)=>{
    const customers=[
        {id:1,firstName:"John",lastName:"Doe"},
        {id:2,firstName:"Cole",lastName:"Bush"},
        {id:3,firstName:"Alex",lastName:"Bush"},
    ];
    res.json(customers);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
