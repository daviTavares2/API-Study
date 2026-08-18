import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "senhasimples123";

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    res.json(movies[randomIndex]);
});

app.get("/movies/:id", (req ,res) =>{
    const id = parseInt(req.params.id);
    const chosedMovie = movies.find((movie) => movie.id === id);
    res.json(chosedMovie);
})

app.post("/movies", (req, res)=>{
  const newMovie = {
        id : movies.length + 1,
        title : req.body.title,
        genre : req.body.genre,
        year : req.body.year,
    }
    movies.push(newMovie);
    console.log(movies.slice(-1))
    res.json(newMovie);
});

app.put("/movies/:id", (req, res)=>{
    const id = parseInt( req.params.id );
    const refresh = {
        id : id,
        title: req.body.title,
        genre: req.body.genre,
        year : req.body.year,
    }
    const searchIndex = movies.findIndex((movie) => movie.id === id);
    movies[searchIndex] = refresh;
    res.json(refresh);
})

app.patch("/movies/:id", (req, res)=>{
    const id = req.params.id;
    const callback = movies.find((movie) => movie.id === id);

    const replacementMovie = {
        id: id,
        title : req.body.title || callback.title,
        genre : req.body.genre|| callback.genre,
        year : req.body.year || callback.year  
    }
    const searchIndex = movies.findIndex((movie) => movie.id === id);
    movies[searchIndex] = replacementMovie;
    res.json(replacementMovie);
});

app.delete("/movies/:id", (req, res)=>{
        const id = req.params.id;
        const searchIndex = movies.findIndex((movie) => movie.id === id);
        if (searchIndex > -1){
            movies.splice(movies , searchIndex);
            res.sendStatus(200);
        } else {
            res
            .status(404)
            .json(`Object with id: ${id}, not found`)
        }
});

    app.delete("/all", (req, res) => {
        const userKey = req.query.key;
        if(userKey === masterKey){
            movies = [];
            res.sendStatus(200);
        } else {
            res
                .sendStatus(404)
                .json({error : "Json not found!"})
        }
    })


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