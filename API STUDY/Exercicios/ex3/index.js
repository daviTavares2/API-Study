import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req ,res)=>{
    res.render("index.ejs");
})

app.post("/", async(req , res)=>{
   try {
    const response = await axios.get("url");
    const result = response.data;
    console.log("result");
   } catch (error) {
    console.log("error")
   }    
})


app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})