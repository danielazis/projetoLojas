// Bibliotecas e Importações
// Importa a HomePage
const HomePage = require("../../pageObjects/HomePage");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");


// ToDo: massa de teste

describe("Comprar Passagem via BlazeDemo - Page Object", () => {
    let driver; // objeto que será o Selenium
    // Cria um objeto para fazer uma configuração avançada do driver
    const chOptions = new chrome.Options();

    // Inicialização
    beforeEach(() => {
        driver = new webdriver.Builder()            // Instacia o Selenium
            .forBrowser("chrome")
            .setChromeOptions(chOptions)
            .build()
        driver.manage().setTimeouts({implicit: 30000});      // espera implicita
        driver.manage().window().maximize(); // maximizar a janela
    });

    // Finalização 
    afterEach(( ) => {
        driver.quit(); // Encerra o objeto Selenium
    });

    // Testes

    it('Comprar Passagem PO', async () => {
        await driver.get("https://www.blazedemo.com");
        const homePage = new HomePage(driver);  // instancia a HomePage
        await homePage.selecionarOrigemDestinoVoo("Boston", "Dublin");
        assert.equal(await homePage.lerTituloGuia(),"BlazeDemo - reserve");
        await homePage.driver.sleep(3000); // pausa para vizualizar

    })

});