// Acionar botão com ENTER
document.addEventListener('keypress',function(buttonENTER) {
    if (buttonENTER == 'Enter') {
        var button = document.querySelectorAll('#botao')
        button.click()
    }
})

function contar() {
    let init = document.querySelector('#valor_inicial')
    let fim = document.querySelector("#valor_final")
    let passo = document.querySelector("#passo")
    let resultado = document.querySelector("#res")

    if (init.value.length==0||fim.value.length==0||passo.value.length==0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = "Contangem: "
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{2192} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{2192} `
            }
        }
        resultado.innerHTML += "Fim <p>Clique em Limpar para recarregar o formulário.</p>"        
    }        
}

function limpar() {
    document.location.reload()
}