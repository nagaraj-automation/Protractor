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
        var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
        browser.get("https://angular.io/");
        browser.sleep(50000);
        browser.waitForAngular(false);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl(),"https://angular.io/");
    
    });
    it("mytest2",()=>{
        browser.get("https://angular.io/");
        browser.sleep(50000);
        browser.waitForAngular(false);
        browser.manage().window().maximize();
        expect(browser.getTitle(),"Angular");
    
    });

});

