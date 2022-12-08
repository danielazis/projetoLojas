//Bibliotecas
const { assert } = require("chai");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");

require("chromedriver");
//Classe ou Descrição

describe('Google',() => {
    let driver;

    // Método de Inicialização
    beforeEach(()=>{
        driver = new webdriver.Builder() // Instancio o objeto Selenium
        .forBrowser('chrome')
        .build()
    })
    // Método de Finalização
    afterEach(() => {
        driver.quit();
    })
    // Métodos de Testes (cada it é um teste)
    it("Consultar Google", async() => {

        await driver.get('https://www.google.com')
        await driver.findElement(By.name('q')).sendKeys('mousse de chocolate' + webdriver.Key.ENTER)
        assert(await driver.getTitle(), 'mousse de chocolate - Pesquisa Google') 
    })
})