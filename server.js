
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello World")
})
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
