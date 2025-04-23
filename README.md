# Documentação de Javascript com Node.JS e testes com Jest.js

_________________________________________________________________________________________________

# Framework de testes JEST.JS
  
Utilizado para facilitar testar o código JavaScript automaticamente, 
garantindo que tudo está funcionando como deveria, economizando tempo 
e detectando erros antes de chegar ao usuário. Fácil de configurar, 
comunidade grande e bem documentado.

Site da documentação: https://jestjs.io/

_________________________________________________________________________________________________

# Gerenciador de pacotes utilizados

NPM - npm install - É o oficial do Node.js, vem instalado junto.

YARN - yarn add - Mais rápido que o npm em versões antigas; 
			usado por times grandes.

PNPM - pnpm add - Super rápido e usa menos espaço (reutiliza pacotes)

_________________________________________________________________________________________________

# Passos para configurar e rodar com Jest.js

Instale o Node.js: https://nodejs.org/pt

Inializando o projeto: npm init –y

Instale o Jest: npm install --save-dev jest

Crie um arquivo de teste: exemplo: soma.test.js

Rode os testes com: npm test

_________________________________________________________________________________________________

# Como testar:

# No arquivo do scripts terá que importar os módulos:

Exemplo: soma.js

function somar(a, b) {
    return a + b;
}

module.exports = {
    somar
};

# No arquivo de teste fazer a requisição:

Exemplo: soma.test.js

const {somar} = require("./soma");

test(“a soma de 2 + 3 deve ser 5", () => {
    expect(soma(2, 3)).toBe(5);
});

# Rode o testes: npm test




		
