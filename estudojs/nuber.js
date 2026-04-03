let num1 = 1500; //number
let num2 = 2.51546481;// number

console.log(num1.toString() + num2);// faz a uniao dos dois como se fosse uma string o to string faz a converçao para parecer uma string(mais a variavel em si continua sendo number)
//num1 = num1.toString();// agora a variavel deixou de ser number e passou a ser string
console.log(typeof num1)//ver o tipo da variavel
console.log(num1.toString(2));//colocando o numero 2 entre os parenteses faz converter o numero para numero binario
console.log(num2.toFixed(2));//serve para arredondar as casas decimais dos numeros e o "2" entre as aspas e pars decidir quantas casas decimar vao aparecer
console.log(Number.isInteger(num1)); //esta função mostra se o numero e um numero inteiro ou quebrado (true para inteiro e false para quebrado)
console.log(Number.isInteger(num2)); //esta função mostra se o numero e um numero inteiro ou quebrado (true para inteiro e false para quebrado)
let temp = num1 * 'ola';//conta invalida
console.log(Number.isNaN(temp))//mostra se a conta é uma conta invalida como a conta acima (true para conta invalida e false para valida)

let n1 = 0.7
let n2 = 0.1

n1 += n2; //0.8
n1 += n2; //0.9 //a variavel soma e recebe os valores
n1 += n2; //1.0

//console.log(n1.toFixed()) nao deixa o numero inteiro pois ao olhos do js ainda e um numero quebrado
n1 = parseFloat(n1.toFixed())//agora as olhos do js este numero e um numero inteiro
console.log(Number.isInteger(n1)); 
console.log(n1);
