//Configura
//Bibliotecas
const { Builder, By} = require("selenium-webdriver");
const assert = require('assert');


const chromedriver = require("chromedriver");
//Executa
describe("Comprar Passagem via programação",() =>{
    
    let driver          //a variavel/objeto que receberá o Selenium

    // Iniciar
    beforeEach(async function () {
        //Instanciar o Selenium WebDriver para controlar o Chrome
        driver = await new Builder().forBrowser("chrome").build()  
        // Configurar o tempo de espera máxima do Selenium      
        await driver.manage().setTimeouts({implicit:30000})
    })

    // Finalizar
    afterEach(async function() {
        await driver.quit(); //Destruir o objeto do Selenium WebDriver
    })

    // Testar
    it("Comprar Passagem WD", async function() {
        // abrir o site no Chrome, sendo controlado pelo Selenium
        await driver.get("https://www.blazedemo.com")
        // Clicar no combo origem / embarque
        await driver.findElement(By.name("fromPort")).click()
        // selecionar  a origem como São Paolo
        {
            const dropdown = await driver.findElement(By.name("fromPort"))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }
        // selecionar o destino como  Berlin
        {
            const dropdown = await driver.findElement(By.name("toPort"))
            await dropdown.findElement(By.xpath("//option[. = 'Berlin']")).click()
        }
        // clicar no botão Find Flights
        await driver.findElement(By.css(".btn-primary")).click()
        
        // Valida
        // validar se foi para a página de reserva
        assert( await driver.getTitle() == "BlazeDemo - reserve")
    
    })
        
})

//Valida