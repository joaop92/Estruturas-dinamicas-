//Crie uma lista encadeada em que cada elemento representa uma pessoa.
//Ela precisa conter informações como nome, idade e referência ao filho
//dela.//
let pessoa = [['João','31','Davi'],
['Carlos','47','Lucas'],
['Miguel','32','Bruno']];
document.write(`1º Pessoa é: <br>`);
document.write(`${pessoa[0][0]}, sua idade é ${pessoa[0][1]}
anos, você é pai de ${pessoa[0][2]}<br>`);
document.write(`2º Pessoa é: <br>`);
document.write(`${pessoa[1][0]}, sua idade é ${pessoa[1][1]}
anos, você é pai de ${pessoa[1][2]}<br>`);
document.write(`3º Pessoa é: <br>` );
document.write(`${pessoa[2][0]}, sua idade é ${pessoa[2][1]}
anos, você é pai de ${pessoa[2][2]}`);