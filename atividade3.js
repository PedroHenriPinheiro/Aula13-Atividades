var inpNameInterprise, inpNameCity, inpValueInterprise, buttonSubmit

inpNameInterprise = document.getElementById('nameInterprise').getValue()

inpNameCity = document.getElementById('nameCity').getValue()

inpValueInterprise = document.getElementById('valueInterprise').getValue()

function validations(inpValueInterprise, inpNameCity, inpNameInterprise) {
    if (typeof inpValueInterprise !== 'number' || inpValueInterprise < 0) {
        throw 'Valor da empresa está inválido!'
    }
    if (typeof inpNameCity !== 'string' || inpNameInterprise !== 'string' || inpNameCity === '' || inpNameInterprise === '') {
        throw 'Os valores do nome ou cidade foram preenchidos incorretamentes!'
    }
}
