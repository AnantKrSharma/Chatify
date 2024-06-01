const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.json({
        msg:"FUck"
    });
})

app.listen(5000, ()=>{
    console.log('Listening to 5000');
})