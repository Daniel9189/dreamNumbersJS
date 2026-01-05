function gerarNumeros(quantidadeJogos, quantidadeNumeros){
    const meuJogo = []
    while (meuJogo.length < quantidadeJogos) {  
        const numeros = []
        while (numeros.length < quantidadeNumeros) {
            let n = Math.floor(Math.random() * 60) + 1
            if (!numeros.includes(n)) {
                numeros.push(n)
            }
        }
        meuJogo.push(numeros.sort((a, b) => a - b))
    }
    console.log(meuJogo)
}


gerarNumeros(5, 6)

/* 
    1. Reorganizar em ordem crescente
    2. Remover duplicatas
    3. Adicionar a possibilidade de esoclher a quantidade de números
    4. Usar a função while
*/