// Troca o titulo do cabecalho da pagina
var title = document.querySelector('.titulo')
title.textContent = 'Aparecida Nutricionista'

// Funcao para calcular o imc
function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

// Busca todos os seletores com a classe paciente
var pacientes = document.querySelectorAll('.paciente')
for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];

    var peso_paciente = paciente.querySelector('.info-peso')
    var altura_paciente = paciente.querySelector('.info-altura')
    var imc = paciente.querySelector('.info-imc')
    
    // pega conteudo em texto de peso e altura do paciente
    content_peso_paciente = peso_paciente.textContent
    content_altura_paciente = altura_paciente.textContent

    // booleanos
    pesoValido = validaPeso(content_peso_paciente)
    alturaValida = validaAltura(content_altura_paciente)
    
    // Verifica se peso é valido
    if(!pesoValido) {
        pesoValido = false
        imc.textContent = 'Peso invalido'
        paciente.classList.add('paciente-invalido')
    }
    
    // Verifica se altura é valida
    if(!alturaValida) {
        alturaValida = false
        imc.textContent = 'Altura invalida'
        paciente.classList.add('paciente-invalido')
    }

    // verifica se dados estao corretos
    if(alturaValida && pesoValido) {
        imc.textContent = calculaImc(content_peso_paciente, content_altura_paciente)
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true
    } else {
        return false
    }
}
