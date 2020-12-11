
const express = require('express');
const app = express()
const Subscribers  = require("./models/subscribers");

 
// Your code goes here
app.get("/", (req,res)=>{
    res.send("hello");
});

app.get("/subscribers", async(req,res)=>{

    let subscriber = await Subscribers.find({});
    //console.log(subscriber);
    res.send(subscriber);
})

app.get("/subscribers/names", async(req,res)=>{

    let names = await Subscribers.find({}, {_id:0, name:1, subscribedChannel:1});
    //console.log(subscriber);
    res.send(names);
})


app.get("/subscribers/:id", async(req,res)=>{

    let id  = req.params.id;

    try {
        let subscriber = await Subscribers.find({_id:id});
    //console.log(subscriber);
        if(subscriber.length === 0){
            res.status(404).send({message: "id not found"});
            return;
        }
        res.send(subscriber[0]);

    } catch (error) {
        res.status(400).send({message: error.message});
        return;
    }
})

module.exports = app;
