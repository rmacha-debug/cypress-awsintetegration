describe('Login into aws', () => {

    it('Login test', function () {
        cy.task('connectaws').then((result) => {
            console.log("Access key:", result.config.credentials.accessKeyId);
            expect(result.config.credentials.accessKeyId).is.equal("AKIATMHI6IKSJ5J2KXHF")
        })
    })
})