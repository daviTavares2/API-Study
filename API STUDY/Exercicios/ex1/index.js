import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON = '[ { "id": "0001", "type": "sorvete", "price": "19.99 R$", "toppings":[ { "sabor": "morango", "quantity": "2 bolas" }, { "sabor": "baunilha", "quantity": "2 bolas" }, { "sabor": "chocolate", "quantity": "2 bolas" } ] } ]'

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true}));

let data;

app.get("/", (req , res )=> {
   res.render("index.ejs",{ recipe : data });
})

app.post("/recipe", (req,res)=> {
    
    switch (req.body.choice){
        case "baunilha":
            data = JSON.parse(recipeJSON)[0];
        break;

         case "chocolate":
            data = JSON.parse(recipeJSON)[1];
        break;

         case "morango":
            data = JSON.parse(recipeJSON)[2];
        break;
        default:
        break;
    }
    res.redirect("/");
})

app.listen(port, () =>{
    console.log("servidor funcionando");
})
