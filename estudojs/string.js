let umastring = "um texto";

console.log(`${umastring}`[3]);// mostra qual letra esta de acordo com o numero
console.log(umastring.concat(` em um lindo dia`));
console.log(`${umastring} em um lindo dia`);
console.log(umastring.search (/x/));//preocura a letra "x"e mostra qual numero esta a primeira letra da string 
console.log(`Qual é o ultimo indice da letra a no seu nome? ${umastring.indexOf(/a/)}`);//preocura a letra "x"e mostra qual numero esta a ultima letra da string
console.log(umastring.replace("um","outro")); // subistitui a palavra da string como mostra o exemplo trocou o "um" para 
console.log(umastring.replace(/t/g,"#")); //  podemos tambem trocar todas as letras da string por outra como mostra o exemplo (é preciso colocar o "G" pois se nao vai trocar so a primeira)
console.log(umastring.length); // mostra o tanto de caracter da string (o espaço conta)
console.log(umastring.slice(3, 8)); // mostra o que esta escrito entre os dois numeros da string como mostrado (se for negativo vai de traz para frente)
console.log(umastring.split(" ", 1)); // mostra a string dividida dentro das aspas voce coloca o caracter que voce quer dividir e o valor escolhido e excluido tambem e podemos colocar uma virgula e um numero para colocar ate onde voce quer que vai
console.log(umastring.toLocaleUpperCase())// faz a string toda vim com letra maiuscula 
console.log(umastring.toLocaleLowerCase())// faz a string toda vim com letra minuscula

//Exercicio 

let nome = "Willian Kenner Dos Reis";

console.log(`Seu nome é ${nome}`);
console.log(`Seu nome tem ${nome.length} letras contando os espaços`);
console.log(`A segunda letra do seu nome é ${nome[1]} `);
console.log(`Qual o primeiro indice da letra a do seu nome? ${nome.search(/a/)}`);
console.log(`Qual é o ultimo indice da letra a no seu nome? ${nome.indexOf(/a/)}  ou seja nao possui`);
console.log(`As ultimas 3 letras do seu nome sao: ${nome.slice(20, 23)}`);
console.log(`As palavras do seu nome sao: ${nome.replace(/ /g, ',')}`);
console.log(`Seu nome com as letras maiusculas: ${nome.toLocaleUpperCase()} `);
console.log(`Seu nome com as letras minusculas: ${nome.toLocaleLowerCase()} `);