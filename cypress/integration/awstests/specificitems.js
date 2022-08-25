var url = '';
describe('scanspecicdata', () => {
    it('scanspecicdata', function () {
     cy.task('scanspecicdata').then((jsondata)=>{
      var obj = JSON.parse(jsondata)
      for(var i=0;i<obj.Count;i++){
        url  = obj.Items[i].Awards
        cy.log(url)
        cy.wait(6000)
      }
     })    
    })
    

})

