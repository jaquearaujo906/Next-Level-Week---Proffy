//Procurar botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//executar um acao
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    //colocar na pagina
}