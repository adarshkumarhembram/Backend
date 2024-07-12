const express = require('express');
const format= require('date-format')
const app = express();

const PORT = 4000 || process.env.PORT ;

app.get("/", (req, res) => {
    res.status(300).send("hello from adarsh");
})

app.get("/api/v1/instagram",(req,res)=>{
    const instasocial={
        username:"adarhbabu",
        followers: 300,
        follows: 20,
        date: format.asString("dd[MM] -- hh:mm:ss ", new Date())
    }

    res.status(200).json({instasocial})
})

app.get("/api/v1/fb",(req,res)=>{
    const instasocial={
        username:"adarhbabufb",
        followers: 3000,
        follows: 200,
        date: Date.now()
    }

    res.status(200).json({instasocial})
})


app.get("/api/v1/linkedin",(req,res)=>{
    const instasocial={
        username:"adarhhembram",
        followers: 500,
        follows: 100,
        date: Date.now()
    }

    res.status(200).json({instasocial})
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})