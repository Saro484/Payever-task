require("chromedriver");

const { Builder, By, Key } = require("selenium-webdriver");
var assert = require("chai").assert;



describe("add note", function () {
    
    it("should add a note and display on the page", async function () {
        let driver = await new Builder().forBrowser("chrome").build();

        try {
           
           await driver.get(" https://commerceos.staging.devpayever.com/registration/fashion");
        
           await driver.sleep(7000)
           await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-1 form-label"]'))
            .click()
           await driver
            .findElement(By.xpath('//input[@formcontrolname="firstName"]'))
            .sendKeys("Saro");
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-2 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="lastName"]'))
            .sendKeys("Hakobyan");
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-3 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="email"]'))
            .sendKeys("hayimm5e7S1212135@gmail.com");
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-4 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="password"]'))
            .sendKeys("HireMeAtPayever16.03");
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-5 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="confirmPass"]'))
            .sendKeys("HireMeAtPayever16.03");
            await driver
            .findElement(By.xpath('//button[@class="signup-button"]'))
            .click();

            await driver.sleep(5000)

            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-1 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="name"]'))
            .sendKeys("Payever");
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-8 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//mat-option[@class="mat-option mat-focus-indicator ng-star-inserted"]'))
            .click();
            await driver
            .findElement(By.xpath('//div[@class="label-container ng-tns-c163-12 form-label"]'))
            .click();
            await driver
            .findElement(By.xpath('//input[@formcontrolname="phoneNumber"]'))
            .sendKeys("985858587");
            await driver.sleep(3000)
            await driver
            .findElement(By.xpath('//button[@class="signup-button"]'))
            .click();

            await driver.sleep(10000)
            await driver
            .findElement(By.xpath('//button[@class="welcome-screen-content-button"]'))
            .click();
            await driver.sleep(5000)

            
            const elements = await driver.findElements(By.xpath('//div[@class="icons__title"]'))
            
            
            
            
            let arr = []
            for (const element of elements) {
                const text = await element.getText()
               arr.push(text)
            }
            
            const checkout = arr.includes("Checkout");
            const Transactions = arr.includes("Transactions");
            const Connect = arr.includes("Connect");
            const Products = arr.includes("Products");
            const Shop = arr.includes("Shop");
            const Message = arr.includes("Message");
            const settings = arr.includes("settings");
            assert(checkout, 'The "Checkout" does not exist.');
            assert(Transactions, 'The "Transactions" does not exist.');
            assert(Connect, 'The "Connect" does not exist.');
            assert(Products, 'The "Products" does not exist.');
            assert(Shop, 'The "Shop" does not exist.');
            assert(!Message, 'The "Message" does not exist.');
            assert(!settings, 'The "settings" does not exist.');
       
            
        } finally {
           
            await driver.quit();
        }
    })
  })
  



