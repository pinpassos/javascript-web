// Comportament do botao de adicionar paciente
const botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault()
    // Pego o formulario e seus respectivos valores
    var form = document.querySelector('#form-adiciona')
    // retorna paciente que foi enviado no formulario
    var paciente = obtemPacienteFormulario(form)
    // Cria tr do paciente  
    var pacienteTr = montaTr(paciente)

    // valida paciente
    const erro = validaPaciente(paciente)
    
    if(erro.length > 0) {
        exibeMensagensErro(erro)
        return
    }

    // Adiciona conteudo da tabela dentro da tabela
    var tabelaPacientes = document.querySelector('#tabela-pacientes')
    tabelaPacientes.appendChild(pacienteTr)

    // apaga dados do formulario para inserirmos novos dados
    form.reset()
    var mensagemErro = document.querySelector('#mensagens-erro')
    mensagemErro.innerHTML = ""

})


// Funcao para pegar dados do formulario de paciente
function obtemPacienteFormulario(form) {
    var funcionario = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return funcionario
}

function montaTr(paciente) {
    
    // Cria tabela com os dados necessários
    const pacienteTr = document.createElement('tr')
    // Adiciona classe paciente a minha tr
    pacienteTr.classList.add('paciente')
    
    // Adiciona valores as celulas das tabelas
    const nomeTd = montaTd(paciente.nome, 'info-nome')
    const pesoTd = montaTd(paciente.peso, 'info-peso')
    const alturaTd = montaTd(paciente.altura, 'info-altura')
    const gorduraTd = montaTd(paciente.gordura, 'info-gordura')
    const imcTd = montaTd(paciente.imc, 'info-imc')

    // Aninha a tabela como ela deve ser aninhada
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

function montaTd(dado, classe) {
    const td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}


function validaPaciente(paciente) {
    // Cria lita vazia de erros
    var lista_erros = []

    // Verifica nome
    if(paciente.nome.length == 0) lista_erros.push('O paciente precisa de um nome')
    // Verifica peso
    if(!validaPeso(paciente.peso)) lista_erros.push('Peso invalido') 
    // Verifica altura
    if(!validaAltura(paciente.altura)) lista_erros.push('Altura invalida')

    return lista_erros
}

function exibeMensagensErro(erros) {
    const ul = document.querySelector('#mensagens-erros')
    erros.forEach(erro => {
        const li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    });
}