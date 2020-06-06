describe("mysuite",()=>{
    var originalTimeout;
    var a=[2,5,6,8,10];
    var b=[4,6,10,20,30];

     beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
     });

    afterEach(function() {
     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     browser.get("http://juliemr.github.io/protractor-demo/");
     browser.manage().window().maximize();
     
    it("Locators",()=>{
        for(i=0;i<a.length;i++){
        
        element(by.model('first')).sendKeys(a[i]);
        element(by.model('second')).sendKeys(b[i]);
        element(by.id('gobutton')).click();
        expect(element(by.css('h2[class=ng-binding]')).getText(),a[i]+b[i])
        }

        
        element.all(by.repeater('result in memory')).each(function(item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function(text)
            {
            console.log(text);
            });
            
        })
       

    
    
    });
    

});

