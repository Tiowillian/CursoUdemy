//console.log('Meu nome é "Willian". Estou aprendendo Javascript às', 22, ' da noite'); quando tem um numero no meio de um texto como o exemplo devemos abrir aspas simples e virgula como mostra o exemplo

//Primeiro exercicio
/*
const nome = 'Willian';
const sobrenome = 'Kenner';
const idade = 22;
const peso = 85;
const altura = 1.70;
let imc = peso / (altura * altura)
let anoNacimento = 2004
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNacimento) */

//================================================================================================================================

//Tipos de Dados primitivos
/*
const nome = 'willian';// string
const nome1 = "Willian";// string
const nome2 = `Willian`;// string
const num1 = 11; // number
const num2 = 17.11; // number
let nomeAluno;// undefined -> não aponta para nenhum local na memoria
const sobremomeAluno = null;// Nulo -> não aponta para nenhum local na memoria
const aprovado = false; // Boolean = true, false (logico)*/

//===================================================================================================================================

//Operadores aritimeticos                                           
/*                                                        Ordem de prioridade        temos os operadores de envrementos como por exemplo
+ adicao / concatenacao                                   ()                            ++ serve para almentar o valor em 1 
- subtracao                                               **                            -- serve para diminuir o valor em 1 
/ divisao                                                 * / %                             (temos o pos encremento e o pre encremento)
* multiplicacao                                           + -       
** potenciacao (colocar um numero elevado a outro)        
% resto da divisao                                        parseInt->inteiro      
                                                          parseFloat->decimais

exemplos

let num1 = 11;
let num2 = 17;
let num3 = 21;
let n1 = 22;
let n2 = 29;
let soma = num1 + num2 + num3;
let media = soma / 3;
const mult = num1 * num2 * num3;
console.log(`De acordo com os: ${num1} ${num2} e ${num3}`);
console.log(`A soma dos numeros é: ${soma}`);
console.log(`A média dos numeros seria: ${media}`);
console.log(`A multiplicacao dos numeros é:${mult}`);
num1++
console.log(`Agora o numero 11 é ${num1}`);
soma = num1 + num2 + num3
media = soma / 3
console.log(`E a somas dos numeros agora é: ${soma}`);
console.log(`E a media virou: ${media}`);
n1 = n1/3
console.log(n1);
n1 = parseInt (n1)
console.log(n1);
*/
//============================================================================================================================================

/*
Alert, Confirm e prompt

alert-> escrever uma mensagen ao abrir a pagina
confirm-> escrever uma mensagem para confirmar ou negar (eu irei receber de volta true ou false)
Prompt-> para o usuario escrever algo (oque o usuario escrever sempre vai ser do tipo string)

exercicio abaixo

let num1 = Number(prompt('Digite um Numero:'));
let num2 = Number(prompt('Digite outro Numero:'));                     o Number antes do prompt e para ja converter a string para number
num1 = Number(num1);
num2 = Number(num2);
let soma =  num1 + num2; 
let mult = num1 * num2;
let divi = num1 / num2;
alert(`A soma dos numeros é ${soma}, a multiplicacao é ${mult} e a divisao é ${divi}`)

============================================================================================================================================

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);


*/