function gerarNumeros(quantidadeJogos, quantidadeNumeros){
    const meuJogo = []
    while (meuJogo.length < quantidadeJogos) {  
        const numeros = []
        while (numeros.length < quantidadeNumeros) {
            let n = Math.floor(Math.random() * 61)
            if (!numeros.includes(n)) {
                numeros.push(n)
            }
        }
        meuJogo.push(numeros.sort((a, b) => a - b))
    }
    console.log(meuJogo)
}


gerarNumeros(5, 6)