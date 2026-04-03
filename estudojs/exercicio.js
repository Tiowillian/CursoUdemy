const numero = Number(prompt('Digite um numero:'));
/*
const numeroTexto = document.getElementById ('texto');
const numeroT = document.getElementById ('numT');
const na = document.getElementById ('Na');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const deci = document.getElementById('deci');
const binario = document.getElementById('binario')
*/
const numeroTitulo = document.getElementById('numero-titulo');//obter elemento por ID
const texto = document.getElementById('texto')

numeroTitulo.innerHTML += `<h1>O numero escolhido foi ${numero}</h1>`;
texto.innerHTML += `<p>A raiz quadrada deste numero é: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é um numero inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.floor(numero)}</p>`;
texto.innerHTML +=  `<p>Arredondando para baixo: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;
texto.innerHTML += `<p>O numero escolhido foi ${numero} e ${numero} em binario seria  ${numero.toString(2)}</p>`
