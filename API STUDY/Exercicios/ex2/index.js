import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

const recipeJSON = '[ { "id":"0001", "type":"pizza", "name":"Margherita", "price":"69:90", "ingredients": "Recheio de queijo com tomate e folha", "tamanhos":["Grande","Médio","Pequeno"] }, { "id":"0001", "type":"pizza", "name":"Frango & catupiry", "price":"69:90", "ingredients": "Recheio de queijo com frango e catupiry", "tamanhos":["Grande","Médio","Pequeno"] }, { "id":"0001", "type":"pizza", "name":"calabresa", "price":"69:90", "ingredients": "Recheio de queijo com calabresa e Cebola", "tamanhos":["Grande","Médio","Pequeno"] } ]'

let data;

app.use(bodyParser.urlencoded({ extended:true }))

app.get("/", (req, res)=>{
    res.render("index.ejs",{ recipe : data });
})

app.post("/recipe",(req,res)=>{
    switch(req.body.choice){
        case "marguerita":
            data = JSON.parse("recipe.JSON")[0];
        break; 
           case "catupiry":
            data = JSON.parse("recipe.JSON")[1];
        break; 
           case "calabresa":
            data = JSON.parse("recipe.JSON")[2];
        break; 
        default:
        break;
    }
    res.redirect("/");
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})