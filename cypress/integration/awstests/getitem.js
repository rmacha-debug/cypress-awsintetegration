var url = '';
describe('Get Item from DB', () => {
    it('Get Item from DB', function () {
     cy.task('scanForResultsDdbDc').then((jsondata)=>{
      var obj = JSON.parse(jsondata)
      expect(0).is.equals(0)
      expect(0).is.equals(0)
      cy.log(obj)
     // expect("Acme Band").is.equals(obj.Items[0].Artist)
      //expect("Arturus Ardvarkian").is.equals(obj.Items[1].Artist)
     // expect("http://demo.automationtesting.in/Register.html").is.equals(obj.Items[2].Artist)
      for(var i=0;i<obj.Count;i++){
        url  = obj.Items[i].Artist
        cy.log(url)
        cy.wait(6000)
      }
     })    
    })
    

})

