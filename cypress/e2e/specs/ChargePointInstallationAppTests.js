describe('Charge Point Installation App Tests', function (){
    this.beforeEach(function() {
        cy.fixture('testData').then(function (data) {
            this.data = data
        })
        cy.launchTheApp()
    })

    it('Add new serial number and verify that the new serial number is added', function() {
        cy.addANewSerialNumber(this.data.serialNumber)
        cy.verifyTheAddedSerialNumber(this.data.serialNumber)
    })

    it('Delete a serial number and verify that the serial number is deleted', function() {
        cy.deleteTheAddedSerialNumber(this.data.serialNumber)
        cy.verifyTheSerialNumberIsDeleted()
    })
})