//criações de variáveis
let input = 0;
let upperCase = 0;
let lowerCase = 0;
let firstLetterUpper = 0      
let textCopy = 0
let area = 0


function showWarning(mensagem){
document.querySelector('.warning').innerHTML = mensagem;
}

//Função para copiar o Texto depois da conversão
function copyText(){
    textCopy = document.querySelector('#area');
    textCopy.select();
    textCopy.setSelectionRange(0, 99999);
    textCopy = document.execCommand("copy");
}

// Essa função vai preveni a ação de envio do formulário
document.querySelector('#btn--copy').addEventListener('click', (event) =>{
    event.preventDefault();

    area = document.querySelector('#area').value;

    if ( area !== ''){
        showWarning('Texto Copiado com Sucesso!');
        }
        else {
        document.querySelector('.warning').innerHTML = 'Digite Alguma coisa.'
        }
});

// >>>>>>>>>>>> Tranformar Tudo em Maisuculo <<<<<<<<<<<<<<<<<

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

// >>>>>>>>>>>> Tranformar Tudo em Menusculo <<<<<<<<<<<<<<<<<

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

// >>>>>>>>>>>> Primeira Letra maiusuclas de cada texto <<<<<<<<<<<<<<<<<

document.querySelector('#btn--firstletterupper').addEventListener('click', (event) =>{
    event.preventDefault();

    //Variavel criada para pegar o valor que o usuário digitou no input.
    input = document.querySelector('#text').value;
        
    /*
    Pegamos a primeira letra usando input[0], transformamos em maiúscula, pegamos 
    também o resto da string menos a primeira letra, usando slice(1) e transformamos em 
    minúscula, depois concatenamos tudo.
    */
    firstLetterUpper = (input[0].toUpperCase() + 
        input.slice(1).toLowerCase());

    //Resultado da conversao
    document.querySelector('#area').innerHTML = firstLetterUpper;

    if ( input !== ''){
    showWarning('Texto Transformado com Sucesso!');
    }
    else {
    document.querySelector('.warning').innerHTML = 'Digite Alguma coisa.'
    }
});


