// Bibliotecas 
const supertest = require("supertest");
const assert = require("chai").assert;


//Classe (Opcional)
describe("PetStore Swagger - User", () => {
    const request = supertest("https://petstore.swagger.io/v2");

    const userId = 101447133;
    const username = "chorao";

    let token = "";
    //Funções ou Métodos
    //Adicionar User
    it("POST User",() => {
        const jsonFile = require("../../vendors/user1.json")

        return request
        .post("/user")
        .send(jsonFile)
        .then((resposta) => {
            assert.equal(resposta.statusCode,200)
            assert.equal(resposta.body.code,200)
            assert.equal(resposta.body.message,userId)
            assert.equal(resposta.body.type,"unknown" )
        })
    })
    //Consultar User
    it("GET User",() => {
        return request
        .get("/user/"+username)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200)
            assert.equal(resposta.body.id,userId)
            assert.equal(resposta.body.password,"123456")
            assert.equal(resposta.body.phone,"1199999999")
        })
    })
    //Alterar User
    it("PUT User",() =>{
        const jsonFile = require("../../vendors/user2.json")

        return request
        .put("/user/"+username)
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode,200)
            assert.equal(resposta.body.code,200)
            assert.equal(resposta.body.message,userId)
            assert.equal(resposta.body.type,"unknown" )
        })
    })

    //Excluir User
   it("DELETE User",() => {
        return request
        .delete("/user/"+username)
        .then((resposta) =>{
            assert.equal(resposta.statusCode,200)
            assert.equal(resposta.body.type,"unknown")
            assert.equal(resposta.body.message,username)
        })

    })
    
    //login com extração do token
    it("Login com Extração",() =>{
        const password = "654321";
        return request
            .get("/user/login?username="+username+"&password="+password)
            .then ((resposta) => {
                assert.equal(resposta.statusCode, 200)
                assert.equal(resposta.body.code, 200)
                assert.equal(resposta.body.type,"unknown")
                token = resposta.body.message.substring(23);
                console.log("Token: "+ token)
            })
    })


})
