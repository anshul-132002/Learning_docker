const express = require('express')
const app = express();


app.get("/" ,(req,res)=>{
    res.json("hello world  from anshul shrivas at jabalpur age 220000  heloo |||  70000084692");
})

app.listen(5000,()=>{
    console.log("app is running on 5000")
})

