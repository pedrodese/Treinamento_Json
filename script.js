const objs = [

    {
        "nome": "Pedro", 
        "idade": 20,
        "esta_trabalhando": true,
        "detalhes_profissao":
        {
            "Profissão":"Desenvolvedor",
            "Empresa":"Freeline"

        },
        "hobbies": ["Pescar", "Jogar Video-games","Jogar futebol"]
    },
    {
        "nome": "João", 
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao":
        {
            "Profissão":null,
            "Empresa":null

        },
        "hobbies": ["Correr", "Academia"]
    }


]

//JSON
//converter objeto para json

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter Json para objeto 

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa)=>{
    console.log(pessoa.nome)
})