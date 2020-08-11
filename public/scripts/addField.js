document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField () {
    const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}
