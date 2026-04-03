//            0123456
const nome = 'Willian'

//                0        1        2                 o array conta por elemento
const alunos = ['luiz', 'Maria', 'João']; //uma lista 
console.log(alunos[1]);
alunos[2] = 'Willian'; //deste jeito mudamos um valor da variavel
console.log(alunos);
alunos[3] = 'Gabi'// adicionando um valor na variavel
console.log(alunos);
console.log(alunos.length);//mostra qual e o proximo numero do elemento
alunos[alunos.length] = 'Gabriel'// um jeito mais facil de add valor na variavel
alunos[alunos.length] = 'Laura'// um jeito mais facil de add valor na variavel
alunos.push('Davi') //jeito mais facil de add (no final)
alunos.push('Ana')
alunos.unshift('Luiza')//para add no começo em vez do final
alunos.pop()// apaga o ultimo valor 
const removido = alunos.pop();//uma variavel dos alunos removidos
alunos.shift();//apaga o primeiro valor
console.log(removido);
console.log(alunos);
console.log(alunos.slice(0, 4));//mostra o tanto de valor voce escolher como na de nunber(pode ser negativo para eliminar de tras para frente)
console.log(alunos instanceof Array);// para mostrar se a variavel é uma Array
