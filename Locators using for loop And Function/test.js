describe("mysuite",()=>{
    var originalTimeout;
    var a=[2,5,6,8,10];
    var b=[4,6,10,20,30];
    var actual;

    //Creating reusable function called Sum
    function Sum(){
        for(var i=0;i<a.length;i++){
            actual=a[i]+b[i];
            element(by.model('first')).sendKeys(a[i]);
            element(by.model('second')).sendKeys(b[i]);
            element(by.id('gobutton')).click();
            
        }

    }


    //This code is to solve Asynchrounus time out for Angular app
     beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
     });

    afterEach(function() {
     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });

     //This is to open app using url
     browser.get("http://juliemr.github.io/protractor-demo/");
     browser.manage().window().maximize();
     
    it("Locators",()=>{
        Sum();
        expect(element(by.css('h2[class=ng-binding]')).getText(),actual)
        
        
        
        element.all(by.repeater('result in memory')).each(function(item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function(text)
            {
            console.log(text);
            });
            
        })
       

    
    
    });
    

});

