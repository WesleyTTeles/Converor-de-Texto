//criação de variáveis
let input = 0;
let upperCase = 0;
let lowerCase = 0;      

function showWarning(mensagem){
document.querySelector('.warning').innerHTML = mensagem;
}

// Essa função vai preveni a ação de envio do formulário
document.querySelector('#btn--upercase').addEventListener('click', (event) =>{
    event.preventDefault();

    //Variavel criada para pegar o valor que o usuário digitou no input.
    input = document.querySelector('#text').value;

    //Variavel para tranformar em caixa alto o que pegou no input
    upperCase = input.toUpperCase();

    //condição para se o usuario inserir dados ou nao
    if ( input !== ''){
    showWarning('Texto Transformado com Sucesso!');
    }
    else {
    document.querySelector('.warning').innerHTML = 'Digite Alguma coisa.'
    }

    //Resultado da conversao
    document.querySelector('#area').innerHTML = upperCase;
});

document.querySelector('#btn--lowercase').addEventListener('click', (event) =>{
    event.preventDefault();

    //Variavel criada para pegar o valor que o usuário digitou no input.
    input = document.querySelector('#text').value;

    //Variavel para tranformar em caixa alto o que pegou no input
    lowerCase = input.toLowerCase();

    //Resultado da conversao
    document.querySelector('#area').innerHTML = lowerCase;

    if ( input !== ''){
    showWarning('Texto Transformado com Sucesso!');
    }
    else {
    document.querySelector('.warning').innerHTML = 'Digite Alguma coisa.'
    }
});