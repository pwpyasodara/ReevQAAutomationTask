import InstallationForm from "../pageObjects/installationForm"

const installationForm = new InstallationForm()
  

//Launch the Charge Point Installation app
Cypress.Commands.add('launchTheApp', () => {
    cy.visit(Cypress.env('baseUrl'))
})

//Add a new serial number
Cypress.Commands.add('addANewSerialNumber', (serialNumber) => {
    installationForm.getSerialNumberTxtField().type(serialNumber)
    installationForm.getAddBtn().click()
})

//Verify the added serial number
Cypress.Commands.add('verifyTheAddedSerialNumber', (serialNumber) => {

    installationForm.getSerialNumberLbl().each(($el, index, $list) => {
        if ($el.text().includes(serialNumber)) {
            cy.log('Serial number added successfully.')
        } else {
            cy.log('Serial number is not added successfully.')
        }
    })
})

//Delete the added serial number
Cypress.Commands.add('deleteTheAddedSerialNumber', (serialNumber) => {

    installationForm.getSerialNumberLbl().each(($el, index, $list) => {
        if ($el.text().includes(serialNumber)) {
            installationForm.getCloseBtn().eq(index).click()
        }
    })
})

//Verify that the serial number is deleted
Cypress.Commands.add('verifyTheSerialNumberIsDeleted', () => {
    installationForm.getSerialNumberLbl().should('not.exist')
})

  
