class InstallationForm {
    getSerialNumberTxtField() {
        return cy.get("[name='input-serial-number']")
    }

    getAddBtn() {
        return cy.get("[class='addButton']")
    }

    getCloseBtn() {
        return cy.get("[class='list-button']")
    }

    getSerialNumberLbl() {
        return cy.get("[class='list-text']")
    }
}

export default InstallationForm