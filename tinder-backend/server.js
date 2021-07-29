import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

// App config
const app = express()
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:Pshyam1619@cluster0.rpdum.mongodb.net/tinderdb?retryWrites=true&w=majority";
//Middleware
app.use(express.json());
app.use(cors({origin:"*"}));

//Dbconfig
mongoose.connect(connection_url,{ useUnifiedTopology: true, useCreateIndex:true,useNewUrlParser:true } );

//Api Config
app.get('/',(req,res)=>{
    res.status(200).send("Hello Clever Programmer");
})

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data)
        }
    })
})

app.get("/tinder/cards",(req,res)=>{
    // const dbCard = req.body;
    Cards.find({},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

//Listener
app.listen(port,(err)=>{
    console.log(`listening on localhost:${port}`);
})