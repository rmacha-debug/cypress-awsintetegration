let dataFile = require('C:\\wev-automation\\cypress\\fixtures\\pdfdata.json');
dataFile.forEach(tdata => {
describe('PDF docs Test-'+tdata.DOCID, () => {    
    it('Opening the PDF doc', () => {
                const ArchiveServerHostname = tdata.AC;
                const Repo = tdata.REPO;
                const Docid = tdata.DOCID;
                var username = "test";
                var title = "test";
                //var url = "http://10.96.94.174:8080/WebViewer/start?xml=%3C?xml%20version=%221.0%22%20encoding=%22iso-8859-1%22?%3E%3CdocAccess%20xmlns=%22http://opentext.net/viewer/webviewer/docAccess%22%20xmlns:xsi=%22http://www.w3.org/2001/XMLSchema-instance%22%3E%3Cdoc%20url=%22http://"+ArchiveServerHostname+"/archive?get%26amp;pVersion%3d0045%26amp;contRep%3d"+Repo+"%26amp;docId%3d"+Docid+"%26amp;%22%20displayName=%22Incoming%20invoice%20-%2000.00.0000%22/%3E%3Cuser%20clientUser=%22Z2%22%20organization=%22%22/%3E%3Crights%20annoRead=%22true%22%20annoWrite=%22true%22%20annoHide=%22true%22%20watermarkPrintHide=%22false%22%20watermarkDisplayHide=%22true%22%20noteRead=%22true%22%20noteWrite=%22true%22%20docSave=%22true%22%20rawSave=%22true%22%20docPrint=%22true%22/%3E%3Cviewer%20logInDate=%222010-05-06%22%20showHeader=%22true%22%20showThumb=%22true%22%20showNotes=%22false%22%20locale=%22en_US%22/%3E%3C/docAccess%3E"
                var url = "http://10.96.94.174:8080/WebViewer/start?xml=%3C?xml%20version=%221.0%22%20encoding=%22iso-8859-1%22?%3E%3CdocAccess%20xmlns=%22http://opentext.net/viewer/webviewer/docAccess%22%20xmlns:xsi=%22http://www.w3.org/2001/XMLSchema-instance%22%3E%3Cdoc%20url=%22http://"+ArchiveServerHostname+"/archive?get%26amp;pVersion%3d0045%26amp;contRep%3d"+Repo+"%26amp;docId%3d"+Docid+"%26amp;%22%20displayName=%22Incoming"+title+"%20invoice%20-%2000.00.0000%22/%3E%3Cuser%20clientUser=%22"+username+"%22%20organization=%22%22/%3E%3Crights%20annoRead=%22true%22%20annoWrite=%22true%22%20annoHide=%22true%22%20watermarkPrintHide=%22false%22%20watermarkDisplayHide=%22true%22%20noteRead=%22true%22%20noteWrite=%22true%22%20docSave=%22true%22%20rawSave=%22true%22%20docPrint=%22true%22/%3E%3Cviewer%20logInDate=%222010-05-06%22%20showHeader=%22true%22%20showThumb=%22true%22%20showNotes=%22false%22%20locale=%22en_US%22/%3E%3C/docAccess%3E"
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                  })
                cy.visit(url)
                cy.get('#setFitToPageEnabled_2').should('be.visible')
                cy.contains('top-frame')
                cy.wait(1000)
                cy.get('#menubar_file').click
                cy.get('#menuitem-save').click
                //cy.get('#setAnnoCanvasEnabled_2').click({ force: true })
                cy.wait(10000)
                
                // in a real test you probably need to do some kind of assertion here
    })
   })
})