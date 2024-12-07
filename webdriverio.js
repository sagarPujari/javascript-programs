describe('Tutorialspoint application', function(){
    //test case
    it('Identify element with Id', function(){
       // launch url
       browser.url('https://the-internet.herokuapp.com/redirector')
       //identify element with id then click
       $("#redirect").click()
       //obtain page title
       console.log('Page title after click: ' + browser.getTitle())
    });
 });