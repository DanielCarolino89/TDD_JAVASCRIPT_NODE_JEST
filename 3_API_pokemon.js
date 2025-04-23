async function siteEstaOnline() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/");
        return response.ok; // true se status HTTP for 200–299
    } catch (error) {
        console.error("Erro ao verificar o site:", error);
        return false;
    }
}

async function pokedex(pokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            return true; // Pokémon encontrado
        } else {
            return false; // Pokémon não encontrado
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        return false;
    }
}

module.exports = {
    siteEstaOnline,
    pokedex
};

