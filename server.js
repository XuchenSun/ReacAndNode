
const express = require('express');
const app = express();
const port = 5000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/', (req, res) => {
    res.send("Hello, this is the Express server with APIs")
})

app.get('/api/customers',(req,res)=>{
    const customersData=[
        {id:1,firstName:"John",lastName:"Doe"},
        {id:2,firstName:"Cole",lastName:"Bush"},
        {id:3,firstName:"Alex",lastName:"Bush"},
        {id:4,firstName:"Xu",lastName:"Bush"},
        {id:5,firstName:"John",lastName:"Doe"},
        {id:6,firstName:"Li",lastName:"Bush"},
        {id:7,firstName:"Ash",lastName:"Bush"},
        {id:8,firstName:"Annie",lastName:"Bush"},
        {id:9,firstName:"Johnson",lastName:"Doe"},
        {id:10,firstName:"Coco",lastName:"Bush"},
        {id:11,firstName:"Android",lastName:"Bush"},
        {id:12,firstName:"Bob",lastName:"Bush"},
        {id:13,firstName:"Candy",lastName:"Doe"},
        {id:14,firstName:"Earnest",lastName:"Bush"},
        {id:15,firstName:"Obert",lastName:"Bush"},
        {id:16,firstName:"Paco",lastName:"Bush"}
    ];
    res.json(customersData);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
