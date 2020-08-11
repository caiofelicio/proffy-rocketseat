document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField () {
    const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}

// const array = [1,2,3,4,5,6,7,8,9,10]

// module.exports = { array }