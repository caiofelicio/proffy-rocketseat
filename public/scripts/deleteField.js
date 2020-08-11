document.querySelector('#delete-item').addEventListener("click", excludeField)

function excludeField() {
    // ainda precisa de melhorias o botão apagar horário
    var elements = document.getElementsByClassName('schedule-items')    
    if ( elements.length > 1 ) {
        const father = document.getElementById("schedule-item")
        father.removeChild(elements[elements.length - 1])
        return
    }
    alert("Para apagar um horário é preciso ter no mínimo 2 adicionados")
}
