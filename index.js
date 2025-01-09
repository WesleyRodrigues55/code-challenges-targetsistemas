/*

    1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
    Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
    Imprimir(SOMA);
    Ao final do processamento, qual será o valor da variável SOMA?

*/

let INDICE = 13;
let SOMA = 0
let K = 0;

while(K < INDICE){
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(`Questão 1, resultado: ${SOMA}`)



/*

    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/

let numero = 34;

let fibonacci = [0, 1];
let i = 1;
let soma = 0;

while(soma < numero){
    soma = fibonacci[i] + fibonacci[i-1];
    fibonacci.push(soma);
    i++;
}

if(fibonacci.includes(numero)){
    console.log(`Questão 2, resultado: O número ${numero} pertence a sequência de Fibonacci`);
} else{
    console.log(`Questão 2, resultado: O número ${numero} não pertence a sequência de Fibonacci`);
}


/*

    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
        • SP – R$67.836,43
        • RJ – R$36.678,66
        • MG – R$29.229,88
        • ES – R$27.165,48
        • Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

*/

let faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

let total = 0;

for(let estado in faturamento){
    total += faturamento[estado];
}

for(let estado in faturamento){
    let percentual = (faturamento[estado] / total) * 100;
    console.log(`Questão 4, resultado: ${estado}: ${percentual.toFixed(2)}%`);
}

/*

    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;

*/

let string = "Teste de string";
let stringInvertida = "";

for(let i = string.length - 1; i >= 0; i--){    
    stringInvertida += string[i];
}

console.log(`Questão 5, resultado: ${stringInvertida}`)