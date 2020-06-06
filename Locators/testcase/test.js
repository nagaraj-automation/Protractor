describe("mysuite",()=>{
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it("mytest1",()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(30000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl(),"http://juliemr.github.io/protractor-demo/");
        
    
    });
    it("Locators",()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(30000);
        browser.manage().window().maximize();
        element(by.model('first')).sendKeys("5");
        element(by.model('second')).sendKeys("10");
        element(by.id('gobutton')).click();
        browser.sleep(30000);
        expect(element(by.css('h2[class=ng-binding]')).getText(),"15");
       element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
           console.log(text);
       });

    
    
    });
    

});

