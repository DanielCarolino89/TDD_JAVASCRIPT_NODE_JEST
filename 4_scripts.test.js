// TESTANDO AS FUNÇÕES MATEMÁTICAS
const { soma, subtracao, divisao, multiplicacao, quadrado } = require("./1_funcoes");

test("soma de 2 + 3 deve ser 5", () => {
    expect(soma(2, 3)).toBe(5);
});

// test("soma de números negativos", () => {
//     expect(soma(-2, -3)).toBe(-5);
// });

// test("subtração de 3 - 2 deve ser 1", () => {
//     expect(subtracao(3, 2)).toBe(1);
// });

// test("divisão de 10 / 2 deve ser 5", () => {
//     expect(divisao(10, 2)).toBe(5);
// });

// test("multiplicar 2 por 3 = 6", () => {
//     expect(multiplicacao(2, 3)).toBe(6);
// });

// test("quadrado de 4 = 16", () => {
//     expect(quadrado(4)).toBe(16);
// });

// // TESTANDO CONVERSÃO PARA NÚMEROS ROMANOS
// const { intParaRomano } = require("./2_numeros_romanos");

// test("Conversão do número 0 deve retornar 'Número inválido'", () => {
//     expect(intParaRomano(0)).toBe('Número inválido');
// });

// test("Conversão do número 2025 deve retornar 'MMXXV'", () => {
//     expect(intParaRomano(2025)).toBe("MMXXV");
// });

// test("Conversão do número -2025 deve retornar 'Número inválido'", () => {
//     expect(intParaRomano(-2025)).toBe("Número inválido");
// });

// // TESTANDO CONEXÃO DE API POKEDEX
// const { siteEstaOnline,pokedex } = require("./3_API_pokemon");

// test("Verifica se o site da PokéAPI está online", async () => {
//     const online = await siteEstaOnline();
//     expect(online).toBe(true);
// });


// test("Requisição do pokemon válido deve retornar 'true'", async () => {
//     const resultado = await pokedex("pikachu");
//     expect(resultado).toBe(true);
// });

// test("Requisição do pokemon válido deve retornar 'true'", async () => {
//     const resultado = await pokedex("charizard");
//     expect(resultado).toBe(true);
// });

// test("Requisição do pokemon válido deve retornar 'true'", async () => {
//     const resultado = await pokedex("mew");
//     expect(resultado).toBe(true);
// });
