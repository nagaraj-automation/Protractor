describe("mysuite", () => {
  var originalTimeout;
  


 
  
 


  //This code is to solve Asynchrounus time out for Angular app
  beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  //This is to open app using url
  browser.get("https://material.angular.io/");
  browser.manage().window().maximize();
  browser.sleep(2000);

  it("Locators", () => {
//This code is find the auto complete input box and perform actions
    browser.actions().mouseMove(element(by.xpath('//app-navbar/nav[1]/a[2]/span')).click()).perform().then(()=>{
        browser.sleep(2000)
    });
    browser.actions().mouseMove(element(by.xpath('//div[contains(text(),"Autocomplete")]')).click()).perform().then(()=>{
        browser.sleep(2000)
    });
    browser.actions().mouseMove(element(by.id('mat-input-0')).click()).perform().then(()=>{
        browser.sleep(2000)
    });

    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(()=>{
        browser.sleep(2000)
    });
    //This code is find all input box by tagname in the page and perform actions and adding asertion
    expect(element.all(by.tagName('input')).count()).toEqual(6);
    element.all(by.tagName('input')).each((item)=>{
        item.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(()=>{
        browser.sleep(2000)
    });

    });
    // browser.actions().mouseMove(element(by.xpath('//a[@class="mat-focus-indicator docs-button mat-raised-button mat-button-base"]')).click()).perform().then(()=>{
    //     browser.sleep(10000);
    // });





  });


});

