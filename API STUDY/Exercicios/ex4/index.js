import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

app.get("/", async (req , res)=>{
   
    try {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random");
        res.render("index.ejs" , {content : JSON.stringify(result.data)});
    } catch(error) {
        res.render("index.ejs" , {error : "occured a error"});
    }
})

app.post("/raca", async (req,res)=>{
    try {
        const result = await axios.get(`https://dog.ceo/api/breed/${req.body.cachorro}/images/random`);
        res.render("index.ejs" , {content : JSON.stringify(result.data)});
    }catch(error){
        res.render("index.ejs",{error : "ocurred a error"});
    }
})
app.listen(port,(err)=> { 
    if(err){
        console.log("Ocurred a error");
    }
    console.log("Listening in port: 3000")
})