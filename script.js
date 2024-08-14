const form = document.getElementById('formCalcular')

form.addEventListener('submit', function(e) {
    e.preventDefault()
})

function calcular() {
    let valor1 = document.querySelector('#num1')
    let valor2 = document.querySelector('#num2')
    let msn = document.querySelector('.mensagemPositivo')
    //let msgNegativo = document.querySelector('.mensagemNegativo')
    let campoA = Number(valor1.value)
    let campoB = Number(valor2.value)

    if(campoA < campoB) {
        valor1.value = ' '
        valor2.value = ' '
        alert('POSITIVO')
        msn.style.display = 'block'
        msn.innerHTML = `<strong>POSITIVO</strong> - O Campo B=(${campoB}) é maior que o Campo A=(${campoA}).`
    }else if(campoA > campoB) {
        valor1.value = ' '
        valor2.value = ' '
        alert('NEGATIVO')
        msn.innerHTML = `<strong>NEGATIVO</strong> - O Campo A=(${campoA}) é maior que o Campo B=(${campoB}).`
        msn.style.background = '#801AF6'
    }else {
        valor1.value = ' '
        valor2.value = ' '
        alert('OS VALORES SÃO IGUAIS!!! TENTE NOVAMENTE!!!')
        msn.style.display = 'none'
    }  
}