import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

const API_URL = ""

app.get("/", async (req,res)=>{
    try {
        const result = await axios.get()
    }
})