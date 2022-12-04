//Importação das funções da calculadora
const calculadora = require("../../src/calculadora.js");

//Importação do arquivo de massa para o teste de divisão
const massaDivisaoJSON = require("../../vendors/massaUnidade.js");

test('somar 2 + 3', () => {
    // 1 - Configura
    //1.1 - Dados de entrada - Input
    const num1 = 2;
    const num2 = 3;
    //1.2 - Dados de saída - Output - Resultado Esperado
    const resultadoEsperado = 5;
    //1.3 - Referência a função que será testada (SUT)
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoAtual = somarDoisNumeros(num1,num2);

    //3 - Executa / Valida
   expect(resultadoAtual).toBe(resultadoEsperado);
    
});

test("subtrair 50 - 10", () =>{
    //1 - Configura
    const num1 = 50;
    const num2 = 10;
    const resultadoEsperado = 40;

    //2 - Executa
    const resultadoAtual = calculadora.subtrairDoisNumeros(num1,num2);
    //3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
});
test("multiplicar 6 * 3", ()=>{
    //Configura
    const num1 = 6;
    const num2 = 3;
    const resultadoEsperado = 18;
    //Executa/ Valida
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    expect (multiplicarDoisNumeros(num1,num2)).toBe(resultadoEsperado);

});

//Teste Positivo
test("dividir 8 / 4",()=>{
    const num1 = 8;
    const num2 = 4;
    const resultadoEsperado = 2;

    const dividirDoisNumeros= calculadora.dividirDoisNumeros;
    const resultadoAtual= dividirDoisNumeros(num1,num2);

    expect (resultadoAtual).toBe(resultadoEsperado);


});

//Teste Negativo / Teste de Exceção

test("dividir por zero",()=>{
    const  num1= 7;
    const num2 = 0;
    const resultadoEsperado = Infinity;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});

//Data Driven Test para a função dividirDoisNumeros
//Lista / array que contém a massa de teste / Tuplas que contém a massa de teste
const massaDivisao = [
    [8,4,2],
    [7,0,Infinity],
    [9,3,3],
    [-10,2,-5],
    [-20,-5,4]
]

//script que usa a massa de teste
test.each(massaDivisao)("Dividir %f / %f", (num1,num2, resultadoEsperado)=>{
    const dividirDoisNumeros=calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});

//Script que usa a massa de teste no formato JSON
test.each(massaDivisaoJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("DIVIDA %f / %f", (num1,num2, resultadoEsperado)=>{
    const dividirDoisNumeros=calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});
