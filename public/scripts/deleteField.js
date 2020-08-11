document.querySelector('#delete-item').addEventListener("click", excludeField)

function excludeField() {

    var elements = document.getElementsByClassName('schedule-items')    
    if ( elements.length > 1 ) {
        const father = document.getElementById("schedule-item")
        father.removeChild(elements[elements.length - 1])
        return
    }
    
    console.log("numero menor ou igual a 1")
    alert("Para apagar um horário é preciso ter no mínimo 2 adicionados")
}
