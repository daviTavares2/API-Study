
fetch(" https://bored-api.appbrewery.com/filter?type=relaxation&participants=1")
   
    .then(resposta => resposta.json())
    .then(dados =>{
        console.log(dados)
    })

    .catch(erro => {
        console.log("nao foi possivel")
    })

