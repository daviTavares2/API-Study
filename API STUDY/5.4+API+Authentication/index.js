import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "davitavares";
const yourPassword = "imTheBestEver";
const yourAPIKey = "065a748e-64c6-4daf-a0cd-9569858d2511";
const yourBearerToken = "9e28e698-04c4-488f-a100-43e74d52a524";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs" , {content: JSON.stringify(result.data) });
  } catch(error) {
    console.log("Error");
 res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
 try {
  const result = await axios.get(API_URL+"all?page=2", {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });
 
  res.render("index.ejs",{content: JSON.stringify(result.data) });
 }  catch(error){
    console.log("error");
    res.render("index.ejs", {content:null , error : "Error"});
 }
});

app.get("/apiKey",async (req, res) => {
    try {
      const result = await axios.get(API_URL+"/filter",{
        params : {
          score :5,
          apiKey : yourAPIKey,
        },
      });
      res.render("index.ejs", {content : JSON.stringify(result.data)});
    } catch(error){
      console.log("error");
      res.render("index.ejs", {error : "Error"});
    }
});

app.get("/bearerToken",async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const result = await axios.get(`${API_URL}/secrets/2`,{
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    res.render("index.ejs",{content: JSON.stringify(result.data)});
  } catch(error) {
    res.render("index.ejs", {error :"Error"});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
