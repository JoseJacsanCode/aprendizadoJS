var nome = prompt('Qual o seu nome?');
document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras <br>`);
document.write(`Seu nome em maiúsculas é ${nome.toLocaleUpperCase()} <br>`);
document.write(`Seu nome é minúsculas é ${nome.toLowerCase()}`);