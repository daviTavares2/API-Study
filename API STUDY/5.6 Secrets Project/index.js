// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import axios from "axios";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com/random";

app.get("/", async (res,req)=>{
    res.render("index.ejs",)
    try {
        const result = axios.get(API_URL);
        res.render("index.ejs" , {secret : JSON.stringify(result.data)});
    } catch(error){
        res.render("index.ejs" ,  { secret: JSON.stringify(error.response.data) });
    }
})


app.listen(port , (err)=>{
    if(err){
        console.log("Occured a error")
    }
    console.log(`Listening on port : ${port}`);
})