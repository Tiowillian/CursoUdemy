let num1 = 2.84115;
let num2  = Math.floor(num1); // arredonda o numero para baixo
let num3 = Math.ceil(num1); // arredonda o numero para cima
let num4 = Math.round(num1); // arredonda para o numero inteiro mais proximo
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log( Math.max(num1, num2, num3, num4));//achar o maior numero dos valores entre os parentese
console.log(Math.min(num1, num2, num3, num4)); //acha o menor numero inteiro
console.log(Math.random())//um numero aleatorio entre 0 e 1 (nuca vai ser o 1 so numero decimal)

const aleatorio = Math.round(Math.random() * (100 - 1) + 1);//para escolher entre quais numeros voce quer e usa o Math.rond para deixar o numero inteiro
console.log(aleatorio);
console.log(Math.PI);//o valor de PI
console.log(Math.pow(2, 10))//eleva um numero a outro como mostra o exemplo que eleva 2 a 10
console.log(2 ** 10)//faz a mesma coisa e ainda e mais pratico
num3++//aumentei um valor da variavel
console.log(num3 ** 0.5); //isso serve para calcular a raiz quadrada