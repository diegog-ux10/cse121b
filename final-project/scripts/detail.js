document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
    fetchPokemonDetails(pokemonId);
});

async function fetchPokemonDetails(pokemonId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();

        const pokemonName = document.getElementById('pokemonName');
        const pokemonImage = document.getElementById('pokemonImage');
        const pokemonType = document.getElementById('pokemonType');
        const pokemonAbilities = document.getElementById('pokemonAbilities');
        const pokemonHeight = document.getElementById('pokemonHeight');
        const pokemonWeight = document.getElementById('pokemonWeight');

        pokemonName.textContent = data.name;
        pokemonImage.src = data.sprites.front_default;
        pokemonType.textContent = data.types.map(type => type.type.name).join(', ');
        pokemonAbilities.textContent = data.abilities.map(ability => ability.ability.name).join(', ');
        pokemonHeight.textContent = `${data.height} ft`;
        pokemonWeight.textContent = `${data.weight} pounds`;
    } catch (error) {
        console.log('Error fetching pokemon details:', error);
    }
}
