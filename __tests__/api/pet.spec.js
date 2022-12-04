//Importações / Referências as Bibliotecas
const supertest = require("supertest");
/*o supertest não tem todas as validações necessárias
Para validar(somente uma classe do chai)*/
const assert = require("chai").assert;

const petId = 991331447; // Id do pet / um dos resultados esperados

describe("Petsore Swagger - Pet", ()=>{
    //Definir o caminho do serviço / API - Base URL
    const request = supertest("https://petstore.swagger.io/v2");

    // Função POST == Create == Incluir
    it("POST Pet", ()=>{
        // Onde está o json com os dados do Pet
        //Configura
        const jsonFile = require("../../vendors/pet1.json");

        return request   //chamada para requisição
            .post("/pet")  //endpoint / função chamada
            //Executa
            .send(jsonFile)  //body / corpo da requisição
            // Valida
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); //comunicação ok
                assert.equal(resposta.body.id,petId); // Valida o id do pet
                assert.equal(resposta.body.name,"Shun");// nome do pet
                assert.equal(resposta.body.status, "available"); // se está disponível
            });

    });//final do POST

    // Função GET == Reach / Read / Research == Consultar
    it("GET Pet",() => {
        return request              //chamada para a requisição 
            .get("/pet/" + petId)   //consulta pelo id do pet
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); //comunicação ok
                assert.equal(resposta.body.id,petId); // Valida o id do pet
                assert.equal(resposta.body.name,"Shun");// nome do pet
                assert.equal(resposta.body.status, "available"); // se está disponível
            })
    });// final do GET

    //Função de Put == Update == Alterar

    it("PUT Pet", () => {
       //Apontando para o json com a alteração
        const jsonFile = require("../../vendors/pet2.json");
        return request              //chamada para a requisição
            .put("/pet")            //endpoint
            .send(jsonFile)         //body com a alteração
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id,petId);
                assert.equal(resposta.body.name,"Shun");
                assert.equal(resposta.body.status,"solded");
            })
    })

    //Função DELETE == Excluir
    it("DELETE Pet",() => {
        return request
        .delete("/pet/" +petId)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200)
        })
    })
})