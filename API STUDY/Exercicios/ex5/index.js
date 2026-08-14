import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "senhasimples123"

app.use(bodyParser.urlencoded({extended : true}));

app.get("/random", (req ,res) => {
    const randomIndex = Math.floor(Math.random * movies.length);
    res.json(movies[randomIndex]);
});

app.listen(port , (req, res) => {
    console.log("Servidor Rodando!");
})

var movies = [
    {
        id : 1,
        title : "Spider Man",
        genre : "Comedy and use",
        year : "2002",  
    }
]